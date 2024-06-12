import React from "react";
import CheckoutDetails from "./CheckoutDetails";
import Summary from "./Summary";
import CheckoutModal from "./CheckoutModal";
import { useForm } from "react-hook-form";

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    const cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    data.orders = cart;
    sessionStorage.setItem("order", JSON.stringify(data));
  };
  return (
    <>
      <div className="bg-gray-100 px-5 py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mx-auto space-y-5 lg:flex lg:items-start lg:gap-5 lg:space-y-0 lg:p-10"
        >
          <CheckoutDetails register={register} />
          <Summary />
        </form>
      </div>
      {isSubmitSuccessful && <CheckoutModal />}
    </>
  );
}

export default Checkout;
