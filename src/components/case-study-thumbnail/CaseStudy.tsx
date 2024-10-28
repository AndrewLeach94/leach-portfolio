import { useRef } from "react";

interface caseStudyProps {
    title: string,
    thumbnailAssetSrc: string,
    modalAssetSrc?: string,
    copy: string
    ctaCopy: string
    ctaUrl: string
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
                    <source src={thumbnailAssetSrc} type="video/webm" />
                </video>
            </button>
             <dialog ref={detailsModal}>
                <button className="close-button" onClick={() => closeModal()}>X</button>
                <video muted controls autoPlay loop>
                    <source src={modalAssetSrc ? modalAssetSrc : thumbnailAssetSrc} type="video/webm" />
                </video>
                <div className="copy-container">
                    <h2>{title}</h2>
                    <p>{copy}</p>
                    <div className="button-group">
                        <a href={ctaUrl} className="btn-primary">{ctaCopy}</a>
                        {ctaCopyTwo && <a href={ctaTwoUrl} className="btn-secondary">{ctaCopyTwo}</a>}
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CaseStudy;