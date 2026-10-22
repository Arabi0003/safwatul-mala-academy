import Link from 'next/link'
import { GraduationCap, BookOpen, Users, Briefcase, Award, Shield } from 'lucide-react'
const roles = [
  { role: 'student', label: 'Student', icon: GraduationCap, color: 'from-blue-500 to-cyan-600', desc: 'Access courses, grades & schedule' },
  { role: 'teacher', label: 'Teacher', icon: BookOpen, color: 'from-orange-500 to-amber-600', desc: 'Manage classes & attendance' },
  { role: 'staff', label: 'Staff', icon: Briefcase, color: 'from-emerald-500 to-teal-600', desc: 'Enrollments & administration' },
  { role: 'graduate', label: 'Graduate', icon: Award, color: 'from-yellow-500 to-orange-600', desc: 'Alumni network & events' },
  { role: 'admin', label: 'Super Admin', icon: Shield, color: 'from-red-500 to-rose-700', desc: 'Full system control' },
]
export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-[#021a13] to-[#010d09] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Safwatulmala Portal</h1>
          <p className="text-emerald-300/50">Select your role to sign in</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {roles.map((r) => {
            const Icon = r.icon
            return (
              <Link key={r.role} href={'/portal/' + r.role} className="group relative rounded-2xl border border-emerald-700/20 bg-emerald-900/20 p-6 text-center hover:border-emerald-500/40 hover:bg-emerald-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className={'mx-auto mb-3 h-12 w-12 rounded-xl bg-gradient-to-br ' + r.color + ' flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-bold text-white mb-1">{r.label}</p>
                <p className="text-[10px] text-emerald-400/40 leading-tight">{r.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}