function Contact() {
  return (
    <div className='p-6 bg-slate-100'>
      <div className='text-orange-500 font-medium'>123</div>
      <h1 className='text-3xl font-bold text-gray-800'>Sorteio de números</h1>
      <small className='text-gray-500 font-normal'>
        Primeiro você escolhe a quantidade de números que irá sortear e depois o intervalo entre esses números.
        Prontinho, é 100% gratuito!
      </small>

      <form className='mt-10'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='first-name'>First name</label>
            <input type='text' id='first-name' name='first-name' className='form-input px-3 py-2 rounded-md' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='last-name'>Last name</label>
            <input type='text' id='last-name' name='last-name' className='form-input px-3 py-2 rounded-md' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' className='form-input px-3 py-2 rounded-md' required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone'>
              <div className='flex align-items'>
                Phone
                <span className='ml-auto opacity-75'>Optional</span>
              </div>
            </label>
            <input type='tel' id='phone' name='phone' className='form-input px-3 py-2 rounded-md' />
          </div>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' name='subject' className='form-input px-3 py-2 rounded-md' required />
          </div>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='subject'>
              <div className='flex align-items'>
                Message
                <span className='ml-auto opacity-75'>Max. 500 characters</span>
              </div>
            </label>
            <textarea
              maxLength={500}
              rows={5}
              id='subject'
              name='subject'
              className='form-input px-3 py-2 rounded-md'
              required
            />
          </div>
        </div>
        <div className='flex justify-end py-4'>
          <button
            type='submit'
            className='bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;