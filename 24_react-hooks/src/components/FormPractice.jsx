import { useForm } from "react-hook-form";

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("유효한 데이터: ", data);
  };

  const onInvalid = (err) => {
    console.log("유효하지 않은 데이터: ", err);
  };

  return (
    <form
      style={{ border: "1px solid salmon" }}
      onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          required: "이름은 필수항목입니다",
        })}
      />
      {errors.username?.message}
      <br />
      <input
        type="number"
        placeholder="나이"
        {...register("age", {
          required: "나이를 입력하세요",
          validate: {
            isRealAge: (value) => {
              return value >= 0 || "나이는 0 이상입니다";
            },
          },
        })}
      />
      {errors.age?.message}
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
