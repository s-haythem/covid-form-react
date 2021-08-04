import "./App.css";

function App() {
  return (
    <div class="form">
      <div class="title ">
        <h1>Covid-19 Vaccination Form</h1>
      </div>
      <div class="name">
        <div class="row col-md-5 col-md-offset-3">
          <label for="formGroupExampleInput" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your first name"
          ></input>
        </div>
        <div class="row col-md-5 col-md-offset-3">
          <label for="formGroupExampleInput2" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your last name"
          ></input>
        </div>
      </div>
      <div class="check">
        <div class="gender">
          <h6>Gender</h6>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          ></input>
          <label class="form-check-label" for="inlineCheckbox1">
            Male
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          ></input>
          <label class="form-check-label" for="inlineCheckbox2">
            Female
          </label>
        </div>
      </div>
      <div class="birthdate">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Enter your birth date
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
        </div>
      </div>
      <div class="typeofvaccin">
        <select class="form-select" aria-label="Default select example">
          <option selected>Vaccine type</option>
          <option value="1">Pfize</option>
          <option value="2">AstraZeneka</option>
          <option value="3">Janssen</option>
          <option value="4">Sinopharm</option>
          <option value="5">Sputnik</option>
        </select>
      </div>
      <div class="comment">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            <h4>Any side effects after the injection ?</h4>
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div class="submit">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Enter your E.mail to submit
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <div class="thanks">
        <h5>Thank you for contributing</h5>
      </div>
    </div>
  );
}

export default App;
