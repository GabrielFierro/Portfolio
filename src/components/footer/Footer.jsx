export default function Footer() {
  return (
    <div className='bg-accent mt-12 h-72 w-full flex flex-col justify-between text-lightMode text-left p-8'>
      <div>
        <h2 className='font-bold text-3xl'>Gabriel</h2>
        <p className='font-normal text-md tracking-normal'>
          Frontend Developer
        </p>
      </div>
      <div>
        <ul className='py-6 space-y-2'>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
}
