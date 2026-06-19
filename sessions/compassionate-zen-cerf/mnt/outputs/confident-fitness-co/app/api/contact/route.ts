import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, age, phone, email, location, goal } = body

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Name, phone and email are required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('contacts')
      .insert([{ name, age, phone, email, location, goal }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
