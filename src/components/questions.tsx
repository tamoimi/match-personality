import { useEffect } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Controller } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface Props {
  question: string;
  options: Option[];
  register: any;
  name: string;
  watch: any;
  control: any;
}

function Questions({ question, options, register, name, control }: Props) {

  useEffect(() => {
    // 처음 마운트될 때, 기본값이 있다면 설정
    register(name, { required: true });
  }, [name, register]);

  return (
    <div className="mt-8">
      <label className="font-semibold">{question}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field }) => (
          <RadioGroup value={field.value || ""} onValueChange={field.onChange} className="flex gap-4 mt-3">
            {options.map((option) => (
              <div
                key={option.value}
                className={`flex-1 p-2 text-sm border rounded-md cursor-pointer items-center space-x-2 ${
                  field.value === option.value ? "bg-gray-200" : ""
                }`}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
}

export default Questions;
