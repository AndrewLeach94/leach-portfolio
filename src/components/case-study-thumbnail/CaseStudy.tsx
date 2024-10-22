import Styles from "./CaseStudy.module.css";

interface caseStudyProps {
    title: string,
    assetSrc: string
}

const CaseStudy = ({title, assetSrc} : caseStudyProps) => {
    return (
        <div className={Styles.caseStudyThumbnail}>
            <p className={Styles.thumbnailTitle}>{title}</p>
            <video muted>
                <source src={assetSrc} type="video/webm" />
            </video>
        </div>
    );
};

export default CaseStudy;