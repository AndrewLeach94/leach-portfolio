import { useRef } from "react";

interface caseStudyProps {
    title: string,
    assetSrc: string
}

const CaseStudy = ({title, assetSrc} : caseStudyProps) => {
    const detailsModal = useRef<HTMLDialogElement>(null);
    
    const openModal = () => {
        detailsModal.current?.showModal();
    };
    const closeModal = () => {
        console.log('close modal triggered');
        detailsModal.current?.close();
    };

    const thumbnailVideoRef = useRef<HTMLVideoElement>(null);
    
    const handleMouseEnter = () => {
        thumbnailVideoRef.current?.play();
    };
    
    const handleMouseLeave = () => {
        thumbnailVideoRef.current?.pause();
    };

    return (
        <div className="case-study-thumbnail">
            <button className="thumbnail-container" onClick={() => openModal()}>
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="expand-icon">+</div>
                <video
                ref={thumbnailVideoRef}
                muted
                loop
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
                >
                    <source src={assetSrc} type="video/webm" />
                </video>
            </button>
             <dialog ref={detailsModal}>
                <button className="close-button" onClick={() => closeModal()}>X</button>
                <video muted controls autoPlay loop>
                    <source src={assetSrc} type="video/webm" />
                </video>
                <div className="copy-container">
                    <h2>Native Modal Dialog</h2>
                    <p>This is a native dialog modal</p>
                </div>
            </dialog>
        </div>
    );
};

export default CaseStudy;