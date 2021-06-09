import React from "react";
import { LANGUAGE } from "../../service/data";

export default function LanguageComponent() {

  return (
    <>
      {LANGUAGE.map(({language, language_code, image}) => {

        return (
          <select key={language}>
            <option value={language}>{language_code}</option>
          </select>
        )
      })}
    </>
  )


}
