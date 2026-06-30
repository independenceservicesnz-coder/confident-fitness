'use client'
import { useEffect, useMemo, useState } from 'react'

const SERVICES = ['In-person session ($90)', 'Monthly plan ($320/mo)', 'Online session ($70)']
const TIME_SLOTS = ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']

function nextAvailableDays(count: number) {
  const days: { date: string; label: string }[] = []
  const d = new Date()
  d.setDate(d.getDate() + 1)
  while (days.length < count) {
    if (d.getDay() !== 0) { // skip Sundays
      const date = [
  d.getFullYear(),
  String(d.getMonth() + 1).padStart(2, '0'),
  String(d.getDate()).padStart(2, '0'),
].join('-')
      const label = d.toLocaleDateString('en-NZ', { weekday: 'short', day: 'numeric', month: 'short' })
      days.push({ date, label })
    }
    d.setDate(d.getDate() + 1)
  }
  return days
}

export default function BookingCalendar() {
  const days = useMemo(() => nextAvailableDays(12), [])
  const [selectedDate, setSelectedDate] = useState(days[0].date)
  const [bookedTimes, setBookedTimes] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: SERVICES[0], notes: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setSelectedTime(null)
    setLoadingSlots(true)
    fetch(`/api/bookings?date=${selectedDate}`)
      .then(r => r.json())
      .then(d => setBookedTimes(d.bookedTimes || []))
      .catch(() => setBookedTimes([]))
      .finally(() => setLoadingSlots(false))
  }, [selectedDate])

  function update(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedTime) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date: selectedDate, time: selectedTime }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
        if (res.status === 409) setBookedTimes(b => [...b, selectedTime])
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Something went wrong. Please call Maya on 021 198 9086.')
      setStatus('error')
    }
  }

  const inputCls = 'font-sans text-base px-[15px] py-[13px] border-[1.5px] border-[#E0D8C8] rounded-[11px] bg-[#FCFAF6] text-ink w-full focus:outline-none focus:border-orange transition-colors'
  const labelCls = 'flex flex-col gap-[7px] text-sm font-semibold text-ink-mid'

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-[54px] h-[54px] rounded-full bg-orange text-white flex items-center justify-center text-[28px] mx-auto mb-4">✓</div>
        <h3 className="font-serif font-semibold text-[28px] text-ink mb-2.5">Booking requested!</h3>
        <p className="text-[17px] text-ink-muted leading-relaxed m-0">
          Your slot on {selectedDate} at {selectedTime} is reserved pending confirmation. Maya will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <div>
        <div className="text-sm font-semibold text-ink-mid mb-2.5">Choose a date</div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {days.map(d => (
            <button
              type="button"
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`flex-shrink-0 px-3.5 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                selectedDate === d.date
                  ? 'bg-charcoal text-cream border-charcoal'
                  : 'bg-[#FCFAF6] text-ink-mid border-[#E0D8C8] hover:border-ink'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-ink-mid mb-2.5">Choose a time</div>
        {loadingSlots ? (
          <div className="text-sm text-ink-muted py-2">Loading availability…</div>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {TIME_SLOTS.map(t => {
              const taken = bookedTimes.includes(t)
              return (
                <button
                  type="button"
                  key={t}
                  disabled={taken}
                  onClick={() => setSelectedTime(t)}
                  className={`py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                    taken
                      ? 'bg-border-card text-ink-muted/50 border-border-card cursor-not-allowed line-through'
                      : selectedTime === t
                        ? 'bg-orange text-white border-orange'
                        : 'bg-[#FCFAF6] text-ink-mid border-[#E0D8C8] hover:border-ink'
                  }`}
                >
                  {t}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <label className={labelCls}>
        Name
        <input required name="name" value={form.name} onChange={update} placeholder="Your name" className={inputCls} />
      </label>

      <div className="grid grid-cols-2 gap-[18px]">
        <label className={labelCls}>
          Email
          <input required type="email" name="email" value={form.email} onChange={update} placeholder="you@email.com" className={inputCls} />
        </label>
        <label className={labelCls}>
          Phone
          <input type="tel" name="phone" value={form.phone} onChange={update} placeholder="Optional" className={inputCls} />
        </label>
      </div>

      <label className={labelCls}>
        Service
        <select name="service" value={form.service} onChange={update} className={inputCls}>
          {SERVICES.map(s => <option key={s}>{s}</option>)}
        </select>
      </label>

      <label className={labelCls}>
        Notes
        <textarea name="notes" value={form.notes} onChange={update} rows={3}
          placeholder="Anything Maya should know?"
          className={`${inputCls} resize-y`} />
      </label>

      {status === 'error' && (
        <p className="text-orange font-semibold text-sm m-0">{errorMsg}</p>
      )}

      <button type="submit" disabled={!selectedTime || status === 'loading'}
        className="mt-1 bg-orange text-white border-none py-4 rounded-full font-semibold text-[17px] hover:bg-[#d44a1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full cursor-pointer">
        {status === 'loading' ? 'Booking…' : selectedTime ? `Book ${selectedDate} at ${selectedTime}` : 'Pick a time above'}
      </button>
    </form>
  )
}
