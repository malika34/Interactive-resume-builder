// regex for validation
const strRegex: RegExp = /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex: RegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex: RegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const digitRegex: RegExp = /^\d+$/;

const mainForm = document.getElementById("cv-form") as HTMLFormElement;
const validType = {
  TEXT: "text",
  TEXT_EMP: "text_emp",
  EMAIL: "email",
  DIGIT: "digit",
  PHONENO: "phoneno",
  ANY: "any",
};

// user inputs elements
let firstnameElem = mainForm.elements.namedItem(
    "firstname"
  ) as HTMLInputElement,
  middlenameElem = mainForm.elements.namedItem(
    "middlename"
  ) as HTMLInputElement,
  lastnameElem = mainForm.elements.namedItem("lastname") as HTMLInputElement,
  imageElem = mainForm.elements.namedItem("image") as HTMLInputElement,
  designationElem = mainForm.elements.namedItem(
    "designation"
  ) as HTMLInputElement,
  addressElem = mainForm.elements.namedItem("address") as HTMLInputElement,
  emailElem = mainForm.elements.namedItem("email") as HTMLInputElement,
  phonenoElem = mainForm.elements.namedItem("phoneno") as HTMLInputElement,
  summaryElem = mainForm.elements.namedItem("summary") as HTMLTextAreaElement;

// display elements
let nameDsp = document.getElementById("fullname_dsp") as HTMLElement,
  imageDsp = document.getElementById("image_dsp") as HTMLImageElement,
  phonenoDsp = document.getElementById("phoneno_dsp") as HTMLElement,
  emailDsp = document.getElementById("email_dsp") as HTMLElement,
  addressDsp = document.getElementById("address_dsp") as HTMLElement,
  designationDsp = document.getElementById("designation_dsp") as HTMLElement,
  summaryDsp = document.getElementById("summary_dsp") as HTMLElement,
  projectsDsp = document.getElementById("projects_dsp") as HTMLElement,
  achievementsDsp = document.getElementById("achievements_dsp") as HTMLElement,
  skillsDsp = document.getElementById("skills_dsp") as HTMLElement,
  educationsDsp = document.getElementById("educations_dsp") as HTMLElement,
  experiencesDsp = document.getElementById("experiences_dsp") as HTMLElement;

// first value is for the attributes and second one passes the nodelists
const fetchValues = (
  attrs: string[],
  ...nodeLists: NodeListOf<HTMLInputElement | HTMLTextAreaElement>[]
): any[] => {
  let elemsAttrsCount = nodeLists.length;
  let elemsDataCount = nodeLists[0].length;
  let tempDataArr: any[] = [];

  // first loop deals with the no of repeaters value
  for (let i = 0; i < elemsDataCount; i++) {
    let dataObj: { [key: string]: string } = {}; // creating an empty object to fill the data
    // second loop fetches the data for each repeaters value or attributes
    for (let j = 0; j < elemsAttrsCount; j++) {
      // setting the key name for the object and fill it with data
      dataObj[attrs[j]] = (nodeLists[j][i] as HTMLInputElement).value;
    }
    tempDataArr.push(dataObj);
  }

  return tempDataArr;
};

const getUserInputs = () => {
  // achievements
  let achievementsTitleElem = document.querySelectorAll(
      ".achieve_title"
    ) as NodeListOf<HTMLInputElement>,
    achievementsDescriptionElem = document.querySelectorAll(
      ".achieve_description"
    ) as NodeListOf<HTMLTextAreaElement>;

  // experiences
  let expTitleElem = document.querySelectorAll(
      ".exp_title"
    ) as NodeListOf<HTMLInputElement>,
    expOrganizationElem = document.querySelectorAll(
      ".exp_organization"
    ) as NodeListOf<HTMLInputElement>,
    expLocationElem = document.querySelectorAll(
      ".exp_location"
    ) as NodeListOf<HTMLInputElement>,
    expStartDateElem = document.querySelectorAll(
      ".exp_start_date"
    ) as NodeListOf<HTMLInputElement>,
    expEndDateElem = document.querySelectorAll(
      ".exp_end_date"
    ) as NodeListOf<HTMLInputElement>,
    expDescriptionElem = document.querySelectorAll(
      ".exp_description"
    ) as NodeListOf<HTMLTextAreaElement>;

  // education
  let eduSchoolElem = document.querySelectorAll(
      ".edu_school"
    ) as NodeListOf<HTMLInputElement>,
    eduDegreeElem = document.querySelectorAll(
      ".edu_degree"
    ) as NodeListOf<HTMLInputElement>,
    eduCityElem = document.querySelectorAll(
      ".edu_city"
    ) as NodeListOf<HTMLInputElement>,
    eduStartDateElem = document.querySelectorAll(
      ".edu_start_date"
    ) as NodeListOf<HTMLInputElement>,
    eduGraduationDateElem = document.querySelectorAll(
      ".edu_graduation_date"
    ) as NodeListOf<HTMLInputElement>,
    eduDescriptionElem = document.querySelectorAll(
      ".edu_description"
    ) as NodeListOf<HTMLTextAreaElement>;

  let projTitleElem = document.querySelectorAll(
      ".proj_title"
    ) as NodeListOf<HTMLInputElement>,
    projLinkElem = document.querySelectorAll(
      ".proj_link"
    ) as NodeListOf<HTMLInputElement>,
    projDescriptionElem = document.querySelectorAll(
      ".proj_description"
    ) as NodeListOf<HTMLTextAreaElement>;

  let skillElem = document.querySelectorAll(
    ".skill"
  ) as NodeListOf<HTMLInputElement>;

  // event listeners for form validation
  firstnameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target as HTMLInputElement, validType.TEXT, "First Name")
  );
  middlenameElem.addEventListener("keyup", (e) =>
    validateFormData(
      e.target as HTMLInputElement,
      validType.TEXT_EMP,
      "Middle Name"
    )
  );
  lastnameElem.addEventListener("keyup", (e) =>
    validateFormData(e.target as HTMLInputElement, validType.TEXT, "Last Name")
  );
  phonenoElem.addEventListener("keyup", (e) =>
    validateFormData(
      e.target as HTMLInputElement,
      validType.PHONENO,
      "Phone Number"
    )
  );
  emailElem.addEventListener("keyup", (e) =>
    validateFormData(e.target as HTMLInputElement, validType.EMAIL, "Email")
  );
  addressElem.addEventListener("keyup", (e) =>
    validateFormData(e.target as HTMLInputElement, validType.ANY, "Address")
  );
  designationElem.addEventListener("keyup", (e) =>
    validateFormData(
      e.target as HTMLInputElement,
      validType.TEXT,
      "Designation"
    )
  );

  achievementsTitleElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "Title")
    )
  );
  achievementsDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(
        e.target as HTMLTextAreaElement,
        validType.ANY,
        "Description"
      )
    )
  );
  expTitleElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "Title")
    )
  );
  expOrganizationElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(
        e.target as HTMLInputElement,
        validType.ANY,
        "Organization"
      )
    )
  );
  expLocationElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "Location")
    )
  );
  expStartDateElem.forEach((item) =>
    item.addEventListener("blur", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "End Date")
    )
  );
  expEndDateElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "End Date")
    )
  );
  expDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(
        e.target as HTMLTextAreaElement,
        validType.ANY,
        "Description"
      )
    )
  );
  eduSchoolElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "School")
    )
  );
  eduDegreeElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "Degree")
    )
  );
  eduCityElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "City")
    )
  );
  eduStartDateElem.forEach((item) =>
    item.addEventListener("blur", (e) =>
      validateFormData(
        e.target as HTMLInputElement,
        validType.ANY,
        "Start Date"
      )
    )
  );
  eduGraduationDateElem.forEach((item) =>
    item.addEventListener("blur", (e) =>
      validateFormData(
        e.target as HTMLInputElement,
        validType.ANY,
        "Graduation Date"
      )
    )
  );
  eduDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(
        e.target as HTMLTextAreaElement,
        validType.ANY,
        "Description"
      )
    )
  );
  projTitleElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "Title")
    )
  );
  projLinkElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "Link")
    )
  );
  projDescriptionElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(
        e.target as HTMLTextAreaElement,
        validType.ANY,
        "Description"
      )
    )
  );
  skillElem.forEach((item) =>
    item.addEventListener("keyup", (e) =>
      validateFormData(e.target as HTMLInputElement, validType.ANY, "skill")
    )
  );

  return {
    firstname: firstnameElem.value,
    middlename: middlenameElem.value,
    lastname: lastnameElem.value,
    designation: designationElem.value,
    address: addressElem.value,
    email: emailElem.value,
    phoneno: phonenoElem.value,
    summary: summaryElem.value,
    achievements: fetchValues(
      ["achieve_title", "achieve_description"],
      achievementsTitleElem,
      achievementsDescriptionElem
    ),
    experiences: fetchValues(
      [
        "exp_title",
        "exp_organization",
        "exp_location",
        "exp_start_date",
        "exp_end_date",
        "exp_description",
      ],
      expTitleElem,
      expOrganizationElem,
      expLocationElem,
      expStartDateElem,
      expEndDateElem,
      expDescriptionElem
    ),
    educations: fetchValues(
      [
        "edu_school",
        "edu_degree",
        "edu_city",
        "edu_start_date",
        "edu_graduation_date",
        "edu_description",
      ],
      eduSchoolElem,
      eduDegreeElem,
      eduCityElem,
      eduStartDateElem,
      eduGraduationDateElem,
      eduDescriptionElem
    ),
    projects: fetchValues(
      ["proj_title", "proj_link", "proj_description"],
      projTitleElem,
      projLinkElem,
      projDescriptionElem
    ),
    skills: fetchValues(["skill"], skillElem),
  };
};

function validateFormData(
  elem: HTMLInputElement | HTMLTextAreaElement,
  elemType: string,
  elemName: string
) {
  // checking for text string and non empty string
  if (elemType == validType.TEXT) {
    if (!strRegex.test(elem.value) || elem.value.trim().length == 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for only text string
  if (elemType == validType.TEXT_EMP) {
    if (!strRegex.test(elem.value)) addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for email
  if (elemType == validType.EMAIL) {
    if (!emailRegex.test(elem.value) || elem.value.trim().length == 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for phone number
  if (elemType == validType.PHONENO) {
    if (!phoneRegex.test(elem.value) || elem.value.trim().length == 0)
      addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }

  // checking for only empty
  if (elemType == validType.ANY) {
    if (elem.value.trim().length == 0) addErrMsg(elem, elemName);
    else removeErrMsg(elem);
  }
}

// adding the invalid text
function addErrMsg(
  formElem: HTMLInputElement | HTMLTextAreaElement,
  formElemName: string
) {
  if (formElem.nextElementSibling) {
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
  }
}

// removing the invalid text
function removeErrMsg(formElem: HTMLInputElement | HTMLTextAreaElement) {
  if (formElem.nextElementSibling) {
    formElem.nextElementSibling.innerHTML = "";
  }
}

// show the list data
const showListData = (listData: any[], listContainer: HTMLElement) => {
  listContainer.innerHTML = "";
  listData.forEach((listItem) => {
    let itemElem = document.createElement("div");
    itemElem.classList.add("preview-item");

    for (const key in listItem) {
      let subItemElem = document.createElement("span");
      subItemElem.classList.add("preview-item-val");
      subItemElem.innerHTML = `${listItem[key]}`;
      itemElem.appendChild(subItemElem);
    }

    listContainer.appendChild(itemElem);
  });
};

const displayCV = (userData: any) => {
  nameDsp.innerHTML =
    userData.firstname + " " + userData.middlename + " " + userData.lastname;
  phonenoDsp.innerHTML = userData.phoneno;
  emailDsp.innerHTML = userData.email;
  addressDsp.innerHTML = userData.address;
  designationDsp.innerHTML = userData.designation;
  summaryDsp.innerHTML = userData.summary;
  showListData(userData.projects, projectsDsp);
  showListData(userData.achievements, achievementsDsp);
  showListData(userData.skills, skillsDsp);
  showListData(userData.educations, educationsDsp);
  showListData(userData.experiences, experiencesDsp);
};

// generate CV
const generateCV = () => {
  let userData = getUserInputs();
  displayCV(userData);
  console.log(userData);
};

function previewImage() {
  let oFReader = new FileReader();
  if (imageElem.files && imageElem.files[0]) {
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function (ofEvent) {
      if (ofEvent.target) {
        imageDsp.src = ofEvent.target.result as string;
      }
    };
  }
}

// print CV
function printCV() {
  window.print();
}
