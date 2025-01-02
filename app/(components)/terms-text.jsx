import React from 'react'

function TermsText() {
  return (
    <div className="flex justify-center">
  <div className=" text-white p-4 rounded-lg max-w-4xl w-full">
    <p className="text-center text-sm">
      By using our service, you accept our <a href="/terms-of-service" className="text-brand-blue hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-brand-blue hover:underline">Privacy Policy</a>.
    </p>
  </div>
</div>

  )
}

export default TermsText