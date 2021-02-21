const Organization = ({ link, image }) => {
  return (
    <div className="org-wrapper">
      <a href={link} target="_blank" rel="noreferrer" >
        <img src={image} />
      </a>

      <style jsx>{`
      .org-wrapper {
        width: 150px;
        height: 90px;
        display: flex;
        align-items: center;
      }
      .org-wrapper img {
        max-width: 100%;
        height: auto;
      }
      `}</style>
    </div>
  );
};

export default Organization;
