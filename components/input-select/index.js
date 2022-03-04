import styles from "./styles.module.scss";

export const InputSelect = ({ label, options, handleChange }) => {
  return (
    <>
      <label htmlFor={label}>{label} : </label>
      <select
        id={label}
        name={label}
        className={styles["input-select"]}
        onChange={handleChange}
      >
        <option value="">-</option>
        {options.map((opt) => (
          <option
            key={opt.name}
            disabled={
              opt?.size_stock === undefined || opt.size_stock > 0 ? false : true
            }
            value={opt.name}
          >
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
};
