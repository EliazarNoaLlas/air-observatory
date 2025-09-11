// components/air-quality-hero/three/Telescope.jsx
import * as THREE from 'three';

export class Telescope {
    constructor() {
        this.init();
    }

    init() {
        const geometry = new THREE.CylinderGeometry(0.2, 0.3, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0x708090 });
        this.mesh = new THREE.Mesh(geometry, material);

        this.mesh.position.set(-3, 1, -5);
        this.mesh.rotation.x = Math.PI / 6;
    }

    animate() {
        this.mesh.rotation.y = Math.sin(Date.now() * 0.0005) * 0.2;
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    removeFromScene(scene) {
        scene.remove(this.mesh);
    }
}