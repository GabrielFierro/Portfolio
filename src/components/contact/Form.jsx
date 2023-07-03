import EmailIcon from '../../assets/icons/mail.svg';

export default function Form() {
  return (
    <section className='mt-12'>
      <div className='flex flex-row'>
        <div className='pt-1'>
          <img src={EmailIcon} alt='Email icon' width='50px' height='50px' />
        </div>
        <div className='flex flex-col text-left px-4'>
          <h2 className='text-3xl text-title font-normal'>Email</h2>
          <span className='text-sm text-email font-light'>
            fierrogabriel13@gmail.com
          </span>
        </div>
      </div>
      <form className='mt-16'>
        <div className='space-y-6'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            className='bg-accent bg-opacity-20 placeholder-black text-sm font-light py-6 px-5 rounded-md w-full'
          />
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            className='bg-accent bg-opacity-20 placeholder-black text-sm font-light py-6 px-5 rounded-md w-full'
          />
          <textarea
            type='message'
            id='email'
            name='email'
            placeholder='Message'
            className='bg-accent bg-opacity-20 placeholder-black text-sm font-light py-12 px-5 rounded-md w-full'
          />
        </div>
      </form>
    </section>
  );
}
