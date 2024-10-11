function Questions({ question, options, register, name }: any) {
  return (
    <div>
      <label>{question}</label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        {options.map((option: any) => (
          <label key={option.value} style={{ cursor: "pointer" }}>
            <input
              type="radio"
              value={option.value}
              {...register(name, { required: true })} // register 직접 적용
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Questions;
