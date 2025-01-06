import { Home, PhoneCall, Settings, User } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';


const Navbar = () => {
      const TABS = [
        {
          label: 'Home',
          icon: <Home className='navbar_icons' />,
        },
        {
          label: 'About',
          icon: <User className='navbar_icons' />,
        },
        {
          label: 'Services',
          icon: <Settings className='navbar_icons' />,
        },
        {
          label: 'Contact',
          icon: <PhoneCall className='navbar_icons' />,
        },
      ];
    
  return (
    <header className="w-full">
        <nav className="w-full flex justify-center pt-3">
                <div className='fixed'>
                  <div className='flex w-full space-x-2 sm:space-x-5 rounded-xl border border-zinc-950/10 bg-white/50 p-2'>
                    <AnimatedBackground
                      defaultValue={TABS[0].label}
                      className='rounded-lg bg-primary-100'
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.3,
                      }}
                    >
                      {TABS.map((tab) => (
                        <button
                          key={tab.label}
                          data-id={tab.label}
                          type='button'
                          className='inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-white'
                        >
                          {tab.icon}
                        </button>
                      ))}
                    </AnimatedBackground>
                  </div>
                </div>
        </nav>
    </header>
  )
}

export default Navbar;