import { useRef } from "react";

interface caseStudyProps {
    title: string,
    assetSrc: string
}

const CaseStudy = ({title, assetSrc} : caseStudyProps) => {
    const detailsModal = useRef<HTMLDialogElement>(null);
    // Function to open the modal
    const openModal = () => {
        console.log('open modal triggered');
        detailsModal.current?.showModal();
    };
    // Function to close the modal
    // const closeModal = () => {
    //     // detailsModal.current?.close();
    // };
    return (
        <div className="case-study-thumbnail">
            <button onClick={() => openModal()}>
                <p className="title">{title}</p>
                <video muted>
                    <source src={assetSrc} type="video/webm" />
                </video>
            </button>
             <dialog ref={detailsModal}>
                <h2>Native Modal Dialog</h2>
                <p>This is a native dialog modal</p>
            </dialog>
        </div>
    );
};

export default CaseStudy;