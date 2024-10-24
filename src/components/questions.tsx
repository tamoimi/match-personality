interface Option {
  value: string;
  label: string;
}

interface Props {
  question: string;
  options: Option[];
  register: any;
  name: string;
}

function Questions({ question, options, register, name }: Props) {
  return (
    <div className="mt-8">
      <label className="font-semibold">{question}</label>
      <div className="flex gap-4 mt-3">
        {options.map((option: Option) => (
          <label key={option.value} className="flex-1 p-2 text-sm border rounded-md cursor-pointer">
            <input type="radio" value={option.value} {...register(name, { required: true })} className="mr-2" />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Questions;
