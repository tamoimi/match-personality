function Questions({ question, options, register, name }: any) {
  return (
    <div className="mt-8">
      <label className="font-semibold ">{question}</label>
      <div className="">
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
