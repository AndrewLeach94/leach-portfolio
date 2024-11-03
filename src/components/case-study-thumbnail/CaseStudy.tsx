import { useRef } from "react";

interface caseStudyProps {
    title: string,
    thumbnailAssetSrc: string,
    modalAssetSrc?: string,
    copy: string
    ctaCopy?: string
    ctaUrl?: string
    ctaCopyTwo?: string
    ctaTwoUrl?: string
}

const CaseStudy = (
    {title, thumbnailAssetSrc, modalAssetSrc, copy, ctaCopy, ctaUrl, ctaCopyTwo, ctaTwoUrl} : caseStudyProps) => {
    const detailsModal = useRef<HTMLDialogElement>(null);
    
    const openModal = () => {
        detailsModal.current?.showModal();
    };
    const closeModal = () => {
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
                <div className="expand-icon">+</div>
                <video
                ref={thumbnailVideoRef}
                muted
                loop
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
                >
                    <source src={thumbnailAssetSrc} type="video/webm" />
                </video>
            </button>
            <p className="title">{title}</p>
             <dialog ref={detailsModal}>
                <button className="close-button" onClick={() => closeModal()}>X</button>
                <video muted controls autoPlay loop>
                    <source src={modalAssetSrc ? modalAssetSrc : thumbnailAssetSrc} type="video/webm" />
                </video>
                <div className="copy-container">
                    <h2>{title}</h2>
                    <p>{copy}</p>
                    <div className="button-group">
                        {ctaCopyTwo && <a href={ctaTwoUrl} target="_blank" className="btn-secondary">{ctaCopyTwo}</a>}
                        {ctaCopy && <a href={ctaUrl} target="_blank" className="btn-primary">{ctaCopy}</a>}
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CaseStudy;