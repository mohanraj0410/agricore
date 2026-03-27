import { useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'

// NOTE: Add these to your .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_agricore'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
}

export function useContactForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }, [errors])

  const validate = useCallback(() => {
    const errs = {}
    if (!values.firstName.trim()) errs.firstName = 'First Name is required'
    if (!values.phone.trim()) errs.phone = 'Phone Number is required'
    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required'
    return errs
  }, [values])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')

    try {
      // Map form fields to EmailJS template variables
      const templateParams = {
        from_name: `${values.firstName} ${values.lastName}`,
        from_email: values.email,
        phone_number: values.phone,
        service_type: values.service,
        message: values.message,
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      setStatus('success')
      setValues(initialState) // Clear form on success
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus('error')
    }
  }, [values, validate])

  return { values, errors, status, handleChange, handleSubmit }
}
