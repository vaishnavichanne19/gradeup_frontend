import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [ContactUser, setContactUser] = useState([]);
  const [MainHeading, setMainHeading] = useState("");
  const [MainHeading1, setMainHeading1] = useState("");
  const [MainDescription, setMainDescription] = useState("");

  // ✅ FIX: Properly initialize ContactForm using useState
  const [ContactForm, setContactForm] = useState({
    fname: "",
    email: "",
    category: "",
    number: "",
    msg: "",
  });

  // 📥 Fetch contact page content
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.gradeup01.in/api/getcontact"
        );
        if (response.data.length > 0) {
          setMainHeading(response.data[0].heading);
          setMainHeading1(response.data[0].heading1);
          setMainDescription(response.data[0].description);
          setContactUser(response.data.slice(1)); // remove main heading data
        }
      } catch (error) {
        toast.error("Failed to fetch contact data.");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // 📤 Submit form handler
  const SubmitForm = async (e) => {
    e.preventDefault();

    if (!ContactForm.fname || !ContactForm.email || !ContactForm.number) {
      toast.error(
        "Please fill Full Name, Email, Mobile Number are required fields."
      );
      return;
    }

      if (ContactForm.number.length !== 10) {
    toast.error("Phone number must be exactly 10 digits.");
    return;
  }
    const { email } = ContactForm;

    // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

    try {
      await axios.post(
        "https://api.gradeup01.in/api/createcontactform",
        ContactForm
      );
      window.location.reload();
      toast.success("Data Added Successfully!");

      // Reset form after submission
      setContactForm({
        fname: "",
        email: "",
        category: "",
        number: "",
        msg: "",
      });
      setSelectedValue("");
    } catch {
      toast.error("Failed to add data");
    }
  };

  // 🧾 Input change handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  // 🔽 Dropdown handler
  const handleSelect = (value) => {
    setSelectedValue(value);
    setContactForm((prev) => ({ ...prev, category: value }));
    setDropdownOpen(false);
  };

  return (
     <>
           <Helmet>
               <title>GradeUp – Contact</title>
            </Helmet>
    <div className="container contact-section">
      <h1>
        <span>{MainHeading} </span> {MainHeading1}
      </h1>
      <p>{MainDescription}</p>

      {/* FORM */}
      <div className="contact-form">
        <h3>Message Us</h3>
        <form onSubmit={SubmitForm}>
          <div className="row">
            {/* Full Name */}
            <div className="col-lg-6 col-md-6 col-sm-12 input-field">
              <label>
                Full Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="fname"
                onChange={inputHandler}
                value={ContactForm.fname}
                placeholder="Enter Full Name"
              />
            </div>

            {/* Email */}
            <div className="col-lg-6 col-md-6 col-sm-12 input-field">
              <label>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={inputHandler}
                value={ContactForm.email}
                placeholder="Enter Email"
              />
            </div>

            {/* Category Dropdown */}
            <div className="col-lg-6 col-md-6 col-sm-12 input-field">
              <label>Category Enquired</label>
              <div className="dropdown">
                <button
                  type="button"
                  className="dropbtn"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  {selectedValue || "Options ▸"}
                </button>
                {dropdownOpen && (
                  <div className="dropdown-content">
                    <div
                      className="contents"
                      onClick={() => handleSelect("Academics (1-12th)")}
                    >
                      Academics (1-12th)
                    </div>
                    <div
                      className="contents"
                      onClick={() => handleSelect("Boards (11-12th)")}
                    >
                      Boards (11-12th)
                    </div>
                    <div
                      className="contents"
                      onClick={() => handleSelect("Entrance Exams")}
                    >
                      Entrance Exams
                    </div>
                    <div className="dropdown-submenu">
                      <div className="contents">Counselling ▸</div>
                      <div className="submenu-content">
                        <div
                          className="contents"
                          onClick={() => handleSelect("Career Counselling")}
                        >
                          Career Counselling
                        </div>
                        <div
                          className="contents"
                          onClick={() =>
                            handleSelect("Educational Counselling")
                          }
                        >
                          Educational Counselling
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-lg-6 col-md-6 col-sm-12 input-field">
              <label>
                Phone Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="number"
                maxLength={10}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*$/.test(val) && val.length <= 10) {
                    setContactForm({ ...ContactForm, number: val });
                  }
                }}
                value={ContactForm.number}
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Message */}
            <div className="col-lg-12 col-md-12 col-sm-12 input-field">
              <label>Send Message</label>
              <textarea
                rows={8}
                name="msg"
                onChange={inputHandler}
                value={ContactForm.msg}
                placeholder="Enter Message"
              />
            </div>

            <div className="contact-btn">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>

      {/* ADDRESS / CONTACT INFO */}
      <div className="contact-address">
        {ContactUser.map((user, index) => (
          <div className="address-section" key={index}>
            <h4>
              <i className={user.icon}></i> {user.heading}
            </h4>
            <p>{user.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Contact;
