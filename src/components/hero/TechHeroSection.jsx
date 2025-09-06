import React, {useEffect, useRef, useState} from 'react';
import { SiJavascript, SiPhp, SiGo, SiHtml5, SiCss3, SiReact, SiNodedotjs } from "react-icons/si";

const techIcons = [
    { icon: <SiJavascript color="#f7df1e" size={40} />, name: "JavaScript" },
    { icon: <SiPhp color="#8892BF" size={40} />, name: "PHP" },
    { icon: <SiGo color="#00ADD8" size={40} />, name: "Golang" },
    { icon: <SiHtml5 color="#e34c26" size={40} />, name: "HTML5" },
    { icon: <SiCss3 color="#264de4" size={40} />, name: "CSS3" },
    { icon: <SiReact color="#61DBFB" size={40} />, name: "React" },
    { icon: <SiNodedotjs color="#3C873A" size={40} />, name: "Node.js" },
];

const cubeFaces = techIcons.slice(0, 6);

const TechHeroSection = () => {
    const heroDotsRef = useRef(null);
    const codeLinesRef = useRef(null);
    const cubeRef = useRef(null);
    const primaryBtnRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Efecto de escritura
        const titleText = "Transformamos Ideas en Tecnología Innovadora";
        let index = 0;

        const typeText = () => {
            if (index < titleText.length) {
                setTypedText(titleText.substring(0, index + 1));
                index++;
                setTimeout(typeText, 100);
            }
        };

        setTimeout(typeText, 500);

        // Cursor parpadeante
        const cursorInterval = setInterval(() => {
            setShowCursor(prevShowCursor => !prevShowCursor);
        }, 530);

        // Puntos flotantes
        const createDots = () => {
            const dotCount = isMobile ? 15 : 30;
            const container = heroDotsRef.current;

            if (!container) return;

            container.innerHTML = '';

            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'absolute rounded-full bg-cyan-400';

                const size = Math.random() * 3 + 1;
                const x = Math.random() * 100;
                const y = Math.random() * 100;

                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                dot.style.left = `${x}%`;
                dot.style.top = `${y}%`;
                dot.style.opacity = (Math.random() * 0.5 + 0.1).toString();

                container.appendChild(dot);
                animateDot(dot);
            }
        };

        const animateDot = (dot) => {
            const duration = Math.random() * 15 + 10;
            const xMove = (Math.random() - 0.5) * 30;
            const yMove = (Math.random() - 0.5) * 30;

            dot.animate(
                [
                    {transform: 'translate(0, 0)', opacity: dot.style.opacity},
                    {transform: `translate(${xMove}px, ${yMove}px)`, opacity: '0'}
                ],
                {
                    duration: duration * 1000,
                    easing: 'ease-in-out',
                    iterations: Infinity,
                    direction: 'alternate'
                }
            );
        };

        // Líneas de código
        const createCodeLines = () => {
            const lineCount = isMobile ? 8 : 15;
            const container = codeLinesRef.current;

            if (!container) return;

            container.innerHTML = '';

            for (let i = 0; i < lineCount; i++) {
                const line = document.createElement('div');
                line.className = 'absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent';

                const width = Math.random() * 30 + 10;
                const x = Math.random() * 100;
                const delay = Math.random() * 8;
                const speed = Math.random() * 5 + 5;

                line.style.width = `${width}%`;
                line.style.left = `${x}%`;
                line.style.animationDelay = `${delay}s`;
                line.style.animationDuration = `${speed}s`;

                container.appendChild(line);
            }
        };

        // Efecto parallax (solo desktop)
        const handleMouseMove = (e) => {
            const cube = cubeRef.current;
            if (!cube || isMobile) return;

            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;

            cube.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        };

        // Efectos de botón
        const setupButtonEffects = () => {
            const primaryBtn = primaryBtnRef.current;
            if (!primaryBtn) return;

            primaryBtn.addEventListener('mouseenter', () => {
                primaryBtn.style.transform = 'translateY(-3px)';
                primaryBtn.style.boxShadow = '0 10px 20px rgba(0, 240, 255, 0.3)';
            });

            primaryBtn.addEventListener('mouseleave', () => {
                primaryBtn.style.transform = 'translateY(0)';
                primaryBtn.style.boxShadow = 'none';
            });
        };

        createDots();
        createCodeLines();
        setupButtonEffects();
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
            clearInterval(cursorInterval);

            const primaryBtn = primaryBtnRef.current;
            if (primaryBtn) {
                primaryBtn.removeEventListener('mouseenter', () => {});
                primaryBtn.removeEventListener('mouseleave', () => {});
            }
        };
    }, [isMobile]);

    return (
        <section className="relative min-h-screen w-full flex items-center bg-gradient-to-br from-[#0d0d2b] via-[#0f0f35] to-[#12123e] overflow-hidden pt-[70px]">
            <div className="w-full max-w-7xl mx-auto px-[5%] grid md:grid-cols-2 gap-8 relative z-10">
                {/* Content Area */}
                <div className="flex flex-col justify-center md:order-1 order-2 text-center md:text-left mt-8 md:mt-0">
                    <div className="inline-flex items-center bg-cyan-400/15 px-4 py-2 rounded-full mb-4 md:mb-6 relative mx-auto md:mx-0 max-w-fit">
                        <div className="w-4 h-4 md:w-5 md:h-5 mr-2 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-xs">✓</div>
                        <div className="text-xs md:text-sm font-medium text-cyan-400">Soluciones de vanguardia</div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 md:mb-6 relative min-h-[3rem] md:min-h-[4rem]">
                        {typedText.split('Tecnología').length > 1 ? (
                            <>
                                {typedText.split('Tecnología')[0]}
                                <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                                    Tecnología
                                </span>
                                {typedText.split('Tecnología')[1]}
                            </>
                        ) : (
                            typedText
                        )}
                        <span className={`inline-block w-1 h-6 md:h-8 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-10 text-white/80 max-w-[90%] md:max-w-full mx-auto md:mx-0">
                        Creamos soluciones de software personalizadas que impulsan a las empresas hacia el futuro
                        digital. Nuestro equipo de expertos está listo para convertir tu visión en realidad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
                        <button
                            ref={primaryBtnRef}
                            className="px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-semibold tracking-wider border-none rounded bg-cyan-400 text-[#0d0d2b] transition-all duration-300"
                        >
                            Solicitar Demostración
                        </button>
                        <button
                            className="px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-semibold tracking-wider border border-cyan-400 text-cyan-400 bg-transparent rounded relative overflow-hidden transition-all duration-300">
                            Nuestras Soluciones
                        </button>
                    </div>
                </div>

                {/* Visual Area - Cubo 3D */}
                <div className="relative flex items-center justify-center md:order-2 order-1 h-[250px] md:h-[400px] mb-8 md:mb-0">
                    <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cyan-400 rounded-full blur-[80px] md:blur-[100px] opacity-15 z-0"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div
                            ref={cubeRef}
                            className="relative w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] preserve-3d animate-[rotateCube_20s_linear_infinite]"
                        >
                            {cubeFaces.map((face, index) => (
                                <div
                                    key={index}
                                    className="absolute w-full h-full bg-cyan-400/5 border border-cyan-400 flex items-center justify-center backdrop-blur-md"
                                    style={{
                                        transform: getCubeFaceTransform(index, isMobile)
                                    }}
                                >
                                    <div className="text-center" style={{ transform: 'scale(0.8)' }}>
                                        {React.cloneElement(face.icon, {
                                            size: isMobile ? 30 : 40
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div ref={heroDotsRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-1"></div>
                </div>
            </div>

            {/* Líneas de código animadas */}
            <div ref={codeLinesRef} className="absolute bottom-0 left-0 w-full h-full opacity-15 z-0 overflow-hidden"></div>

            {/* Estilos CSS */}
            <style jsx global>{`
                @keyframes rotateCube {
                    0% { transform: rotateX(0deg) rotateY(0deg); }
                    100% { transform: rotateX(360deg) rotateY(360deg); }
                }

                @keyframes codeLine {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }

                .preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </section>
    );
};

// Función auxiliar para las transformaciones del cubo
function getCubeFaceTransform(index, isMobile) {
    const translateZ = isMobile ? '90px' : '160px';

    switch(index) {
        case 0: return `translateZ(${translateZ})`;
        case 1: return `rotateY(180deg) translateZ(${translateZ})`;
        case 2: return `rotateY(90deg) translateZ(${translateZ})`;
        case 3: return `rotateY(-90deg) translateZ(${translateZ})`;
        case 4: return `rotateX(90deg) translateZ(${translateZ})`;
        case 5: return `rotateX(-90deg) translateZ(${translateZ})`;
        default: return '';
    }
}

export default TechHeroSection;