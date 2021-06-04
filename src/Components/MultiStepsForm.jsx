import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import AboutForm from './StepForm/AboutForm'
import AddressForm from './StepForm/AddressForm'
import Contact from './StepForm/Contact'
import FormSubmitted from "./StepForm/FormSubmitted";
import Hobbies from './StepForm/Hobbies';

const defaultData = {
    name: '',
    age: '',
    // gender: '',
    addressone: '',
    streetone: '',
    addresstwo:'',
    streettwo: '',
    phone:'',
    email:'',
    // hobbies: ''
}
const steps = [
    {id: "about" },
    {id: "address" },
    {id: "contact" },
    {id: "hobbies" },
    {id: "Done"}
]

function MultiStepsForm() {
    const [formData, setForm] = useForm(defaultData);
    const [genderType, setGenderType] = useState(["Female", "Male", "Other"])
    const [hobbiesType, setHobbiesType] = useState(["Cricket", "BattlegroundGames", "Outing", "food"])
    const [selectedGender, setSelectedGender] = useState("")
    const [selectedHobbies, setSelectedHobbies] = useState("")

    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })

    const props = {
      formData,
      setForm,
      navigation,
      genderType,
      setSelectedGender,
      selectedGender,
      setHobbiesType,
      setSelectedHobbies,
      hobbiesType,
      selectedHobbies,
    };

    switch (step.id) {
      case "about":
        return <AboutForm { ...props} /> ;
      case "address":
        return <AddressForm  {...props} />;
      case "contact":
        return <Contact { ...props} />;
      case "hobbies":
        return <Hobbies { ...props} />;
        case "Done":
            return <FormSubmitted { ...props} />
      default:
        return null;
    }

    // eslint-disable-next-line no-unreachable
    return(
        <div>
            MultiStepsForm
        </div>
    );
}

export default MultiStepsForm;