import { useRef } from "react";

interface caseStudyProps {
    title: string,
    thumbnailAssetSrc: string,
    modalAssetSrc?: string,
    copy: string
    ctaCopy?: string
    ctaUrl?: string
    categoryTags?: string[];
    techStackTags?: string[];
    ctaCopyTwo?: string
    ctaTwoUrl?: string
}

const CaseStudy = (
    {
    title, 
    thumbnailAssetSrc, 
    modalAssetSrc, 
    copy, 
    ctaCopy, 
    ctaUrl, 
    ctaCopyTwo, 
    ctaTwoUrl,
    categoryTags,
    techStackTags,
} : caseStudyProps) => {
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
                {/* <video
                ref={thumbnailVideoRef}
                muted
                loop
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
                >
                    <source src={thumbnailAssetSrc} type="video/mp4" />
                </video> */}
            </button>
            <div className="tags">
                {categoryTags && categoryTags.map((tag, index) => <span className="category-chip" key={index}>{tag}</span>)}
                {techStackTags && techStackTags.map((tag, index) => <span className="tech-chip" key={index}>{tag}</span>)}
            </div>
            <p className="title">{title}</p>
             <dialog ref={detailsModal}>
                <div className="close-container">
                    <button className="close-button" onClick={() => closeModal()}>X</button>
                </div>
                <video muted controls autoPlay loop>
                    <source src={modalAssetSrc ? modalAssetSrc : thumbnailAssetSrc} type="video/mp4" />
                </video>
                <div className="copy-container">
                    <div className="tags">
                        {categoryTags && categoryTags.map((tag, index) => <span className="category-chip" key={index}>{tag}</span>)}
                        {techStackTags && techStackTags.map((tag, index) => <span className="tech-chip" key={index}>{tag}</span>)}
                    </div>
                    <h2>{title}</h2>
                    <p>{copy}</p>
                    <div className="button-group">
                        {ctaCopyTwo && <a href={ctaTwoUrl} className="btn-secondary">{ctaCopyTwo}</a>}
                        {ctaCopy && <a href={ctaUrl} target="_blank" className="btn-primary">{ctaCopy}</a>}
                    </div>
                    <p className="close-text">Press <code>esc</code> to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default CaseStudy;