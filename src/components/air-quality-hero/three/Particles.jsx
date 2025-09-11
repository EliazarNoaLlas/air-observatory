// components/air-quality-hero/three/Particles.jsx
import * as THREE from 'three';

export class Particles {
    constructor(aqiData, count = 50) {
        this.particles = [];
        this.aqiData = aqiData;
        this.init(count);
    }

    init(count) {
        const geometry = new THREE.SphereGeometry(0.05);
        const material = new THREE.MeshBasicMaterial({
            color: this.aqiData.aqi > 100 ? 0xff4444 : 0x88ccff,
            transparent: true,
            opacity: 0.6
        });

        for (let i = 0; i < count; i++) {
            const particle = new THREE.Mesh(geometry, material);
            particle.position.set(
                Math.random() * 20 - 10,
                Math.random() * 10,
                Math.random() * 20 - 10
            );
            particle.userData.originalY = particle.position.y;
            particle.userData.index = i;
            this.particles.push(particle);
        }
    }

    animate() {
        this.particles.forEach((particle) => {
            const time = Date.now() * 0.001;
            const index = particle.userData.index;

            particle.position.y += Math.sin(time + index) * 0.01;
            particle.position.x += Math.cos(time + index) * 0.005;
        });
    }

    updateAQI(aqiData) {
        this.aqiData = aqiData;
        const newColor = aqiData.aqi > 100 ? 0xff4444 : 0x88ccff;

        this.particles.forEach(particle => {
            particle.material.color.setHex(newColor);
        });
    }

    addToScene(scene) {
        this.particles.forEach(particle => scene.add(particle));
    }

    removeFromScene(scene) {
        this.particles.forEach(particle => scene.remove(particle));
    }
}