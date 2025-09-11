// components/air-quality-hero/hooks/useThreeScene.js
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Satellite } from '../three/Satellite';
import { Telescope } from '../three/Telescope';
import { Particles } from '../three/Particles';
import { getAQISkyColor } from '../utils/aqiColors';

export const useThreeScene = (containerRef, aqiData) => {
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const animationFrameRef = useRef(null);
    const objectsRef = useRef({});
    const [sceneReady, setSceneReady] = useState(false);

    // Initialize scene
    useEffect(() => {
        if (!containerRef.current || !aqiData) return;

        // Cleanup previous scene
        if (rendererRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
            containerRef.current.removeChild(rendererRef.current.domElement);
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);

        // Set dynamic fog based on AQI
        const skyColor = getAQISkyColor(aqiData.aqi);
        scene.fog = new THREE.Fog(skyColor, 1, 100);

        camera.position.z = 5;

        // Store refs
        sceneRef.current = scene;
        rendererRef.current = renderer;
        cameraRef.current = camera;

        // Create scene objects
        const satellite = new Satellite();
        const telescope = new Telescope();
        const particles = new Particles(aqiData);

        satellite.addToScene(scene);
        telescope.addToScene(scene);
        particles.addToScene(scene);

        objectsRef.current = {
            satellite,
            telescope,
            particles
        };

        setSceneReady(true);

        // Animation loop
        const animate = () => {
            animationFrameRef.current = requestAnimationFrame(animate);

            // Animate objects
            Object.values(objectsRef.current).forEach(object => {
                if (object && object.animate) {
                    object.animate();
                }
            });

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (camera && renderer) {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            // Cleanup objects
            Object.values(objectsRef.current).forEach(object => {
                if (object && object.removeFromScene) {
                    object.removeFromScene(scene);
                }
            });

            // Cleanup renderer
            if (renderer) {
                renderer.dispose();
            }

            setSceneReady(false);
        };
    }, [containerRef, aqiData?.aqi]);

    // Update particles when AQI changes
    useEffect(() => {
        if (objectsRef.current.particles && aqiData) {
            objectsRef.current.particles.updateAQI(aqiData);
        }
    }, [aqiData?.aqi]);

    const getSceneStats = () => {
        if (!sceneRef.current || !rendererRef.current) return null;

        return {
            objects: sceneRef.current.children.length,
            drawCalls: rendererRef.current.info.render.calls,
            triangles: rendererRef.current.info.render.triangles
        };
    };

    return {
        sceneReady,
        scene: sceneRef.current,
        renderer: rendererRef.current,
        camera: cameraRef.current,
        getSceneStats
    };
};