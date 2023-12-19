const CategoriesBar = ({ completedCategory, onCategorySelection }) => {
  return (
    <div className="CategoriesBar">
      <span
        className={completedCategory === null ? "active" : ""}
        onClick={() => onCategorySelection(null)}
      >
        All
      </span>
      <span
        className={completedCategory === false ? "active" : ""}
        onClick={() => onCategorySelection(false)}
      >
        Active
      </span>
      <span
        className={completedCategory === true ? "active" : ""}
        onClick={() => onCategorySelection(true)}
      >
        Completed
      </span>
    </div>
  );
};

export default CategoriesBar;
