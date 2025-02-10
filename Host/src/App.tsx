import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formik } from 'formik'
import { SumTextTwoFields } from "custom/SumTextTwoFields";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Host</h1>
      <Formik
       initialValues={{ field1: '', field2: '', field3: '' }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}


     >
       {({
         values,
         setFieldValue,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
          <label htmlFor="text"> Field 1
            <input
              type="text"
              name="field1"
              onChange={handleChange}
              onBlur={(e) => {
                SumTextTwoFields(setFieldValue, values)
                handleBlur(e)
              }}
              value={values.field1}
            />
          </label>
           <label htmlFor="field2"> Field 2
            <input
              type="text"
              name="field2"
              onChange={handleChange}
              onBlur={(e) => {
                SumTextTwoFields(setFieldValue, values)
                handleBlur(e)
              }}
              value={values.field2}
            />
           </label>
           <label htmlFor="field3"> Field 1+2 control
            <input
              type="text"
              name="field3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.field3}
            />
           </label>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </>
  )
}

export default App
