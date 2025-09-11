// components/air-quality-hero/three/Satellite.jsx
import * as THREE from 'three';

export class Satellite {
    constructor() {
        this.group = new THREE.Group();
        this.init();
    }

    init() {
        // Main body
        const bodyGeometry = new THREE.BoxGeometry(0.5, 0.2, 0.8);
        const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);

        // Solar panels
        const panelGeometry = new THREE.PlaneGeometry(1.5, 0.1);
        const panelMaterial = new THREE.MeshBasicMaterial({ color: 0x000080 });
        const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
        const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);

        panel1.position.set(0, 0.3, 0);
        panel2.position.set(0, -0.3, 0);

        this.group.add(body, panel1, panel2);
        this.group.position.set(5, 3, -10);

        // Store references for animation
        this.body = body;
        this.panels = [panel1, panel2];
    }

    animate() {
        // Rotate satellite
        this.group.rotation.y += 0.01;

        // Orbital movement
        const time = Date.now() * 0.001;
        this.group.position.x = Math.cos(time) * 6;
        this.group.position.z = Math.sin(time) * 6 - 10;

        // Rotate solar panels
        this.panels.forEach(panel => {
            panel.rotation.y += 0.01;
        });
    }

    addToScene(scene) {
        scene.add(this.group);
    }

    removeFromScene(scene) {
        scene.remove(this.group);
    }
}