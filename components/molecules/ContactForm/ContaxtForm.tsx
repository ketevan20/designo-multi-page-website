'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Can't be empty"),
  email: Yup.string()
    .required("Can't be empty")
    .email('Email invalid'),
  phone: Yup.string()
    .required("Can't be empty"),
  message: Yup.string()
    .required("Can't be empty"),
});

const ContactForm = () => {
  const handleSubmit = (values: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    console.log(values);
  };

  return (
    <div className='w-screen left-1/2 -translate-x-1/2 sm:w-full bg-[rgba(231,129,107,1)] sm:rounded-[15px] p-10 md:px-24 md:py-10 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden ' >
      <img src='/contact/desktop/bg-pattern-hero-desktop.svg' alt='' className='absolute left-0 bottom-0 z-10'/>
      <div className='text-white flex-1 flex flex-col gap-8 relative z-30'>
        <h1 className='h1'>Contact Us</h1>
        <p className='body'>
          Ready to take it to the next level? Let's talk about your project or idea and find out how we can
          help your business grow. If you are looking for unique digital experiences that's relatable to your
          users, drop us a line.
        </p>
      </div>

      <div className='flex-1 w-full relative z-30'>
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {() => (
            <Form className='flex flex-col gap-4'>
              <div className='relative'>
                <Field
                  name="name"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 pt-2 text-white placeholder-white/50 outline-none text-sm font-medium focus:border-white transition-colors"
                />
                <div className='absolute right-0 bottom-2'>
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-white/80 text-xs italic mt-1"
                  />
                </div>
              </div>

              <div className='relative'>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/40 pb-3 pt-2 text-white placeholder-white/50 outline-none text-sm font-medium focus:border-white transition-colors"
                />
                <div className='absolute bottom-2 right-0'>
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-white/80 text-xs italic mt-1"
                  />
                </div>
              </div>

              <div className='relative'>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent border-b border-white/40 pb-3 pt-2 text-white placeholder-white/50 outline-none text-sm font-medium focus:border-white transition-colors"
                />
                <div className='absolute right-0 bottom-2'>
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-white/80 text-xs italic mt-1"
                  />
                </div>
              </div>

              <div className='relative'>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-white/40 pb-3 pt-2 text-white placeholder-white/50 outline-none text-sm font-medium focus:border-white transition-colors resize-none"
                />
                <div className='absolute right-0 bottom-2'>
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-white/80 text-xs italic mt-1"
                  />
                </div>
              </div>

              <div className='flex justify-end mt-2'>
                <button
                  type="submit"
                  className="bg-white text-[rgba(231,129,107,1)] uppercase tracking-[2px] text-sm font-medium px-10 py-4 rounded-lg hover:bg-[#1d1c1e] hover:text-white transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;