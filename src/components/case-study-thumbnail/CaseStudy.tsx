import { useRef } from "react";

interface caseStudyProps {
    title: string,
    thumbnailAssetSrc: string,
    videoSrc: string,
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
    videoSrc,
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
    
    return (
        <div className="case-study-thumbnail">
            <button className="thumbnail-container" onClick={() => openModal()}>
                {/* <div className="expand-icon">+</div> */}
                <span className="expand lnr lnr-frame-expand"></span>
                <img src={thumbnailAssetSrc} alt={title} />
                <p className="title">{title}</p>
            </button>
            {/* <div className="tags">
                {categoryTags && categoryTags.map((tag, index) => <span className="category-chip" key={index}>{tag}</span>)}
                {techStackTags && techStackTags.map((tag, index) => <span className="tech-chip" key={index}>{tag}</span>)}
            </div> */}
             <dialog ref={detailsModal}>
                <div className="close-container">
                    <button className="close-button" onClick={() => closeModal()}>X</button>
                </div>
                <video muted controls autoPlay loop>
                    <source src={videoSrc} type="video/mp4" />
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