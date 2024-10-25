
interface caseStudyProps {
    title: string,
    assetSrc: string
}

const CaseStudy = ({title, assetSrc} : caseStudyProps) => {
    return (
        <div className="case-study-thumbnail">
            <p className="title">{title}</p>
            <video muted>
                <source src={assetSrc} type="video/webm" />
            </video>
        </div>
    );
};

export default CaseStudy;