import React, { useState } from "react";

const FormComponent = () => {
  const [formValues, setFormValues] = useState({
    nume: "",
    prenume: "",
    cnp: "",
    email: "",
    tipAct: "",
    serie: "",
    numar: "",
    eliberatDe: "",
    laData: "",
    valabilPanaLa: "",
    judet: "",
    localitate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formValues.nume) newErrors.nume = "Nume este obligatoriu.";
    if (!formValues.prenume) newErrors.prenume = "Prenume este obligatoriu.";
    if (!formValues.cnp) newErrors.cnp = "CNP este obligatoriu.";
    if (!formValues.email) newErrors.email = "Email este obligatoriu.";
    if (!formValues.tipAct) newErrors.tipAct = "Tip act este obligatoriu.";
    if (!formValues.serie) newErrors.serie = "Seria este obligatorie.";
    if (!formValues.numar) newErrors.numar = "Numărul este obligatoriu.";
    if (!formValues.eliberatDe) newErrors.eliberatDe = "Eliberat de este obligatoriu.";
    if (!formValues.laData) newErrors.laData = "Data este obligatorie.";
    if (!formValues.valabilPanaLa)
      newErrors.valabilPanaLa = "Data expirării este obligatorie.";
    if (!formValues.judet) newErrors.judet = "Județul este obligatoriu.";
    if (!formValues.localitate)
      newErrors.localitate = "Localitatea este obligatorie.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formular trimis:", formValues);
      alert("Formular trimis cu succes!");
      setFormValues({
        nume: "",
        prenume: "",
        cnp: "",
        email: "",
        tipAct: "",
        serie: "",
        numar: "",
        eliberatDe: "",
        laData: "",
        valabilPanaLa: "",
        judet: "",
        localitate: "",
      });
    }
  };

  const handleReset = () => {
    setFormValues({
      nume: "",
      prenume: "",
      cnp: "",
      email: "",
      tipAct: "",
      serie: "",
      numar: "",
      eliberatDe: "",
      laData: "",
      valabilPanaLa: "",
      judet: "",
      localitate: "",
    });
    setErrors({});
  };

  return (
    <div>
      <h2>Formular Simplu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nume:</label>
          <input
            type="text"
            name="nume"
            value={formValues.nume}
            onChange={handleChange}
          />
          {errors.nume && <div style={{ color: "red" }}>{errors.nume}</div>}
        </div>
        <div>
          <label>Prenume:</label>
          <input
            type="text"
            name="prenume"
            value={formValues.prenume}
            onChange={handleChange}
          />
          {errors.prenume && <div style={{ color: "red" }}>{errors.prenume}</div>}
        </div>
        <div>
          <label>CNP:</label>
          <input
            type="text"
            name="cnp"
            value={formValues.cnp}
            onChange={handleChange}
          />
          {errors.cnp && <div style={{ color: "red" }}>{errors.cnp}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div>
          <label>Tip Act:</label>
          <select
            name="tipAct"
            value={formValues.tipAct}
            onChange={handleChange}
          >
            <option value="">Selectează</option>
            <option value="CI">CI</option>
            <option value="PA">Pașaport</option>
          </select>
          {errors.tipAct && <div style={{ color: "red" }}>{errors.tipAct}</div>}
        </div>
        <div>
          <label>Seria:</label>
          <input
            type="text"
            name="serie"
            value={formValues.serie}
            onChange={handleChange}
          />
          {errors.serie && <div style={{ color: "red" }}>{errors.serie}</div>}
        </div>
        <div>
          <label>Număr:</label>
          <input
            type="number"
            name="numar"
            value={formValues.numar}
            onChange={handleChange}
          />
          {errors.numar && <div style={{ color: "red" }}>{errors.numar}</div>}
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
