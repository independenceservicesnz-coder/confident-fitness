import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, age, phone, email, location, goal } = body

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Name, phone and email are required' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // If Supabase is configured, save to database
    if (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http')) {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(supabaseUrl, supabaseKey)

      const { error } = await supabase
        .from('contacts')
        .insert([{ name, age, phone, email, location, goal }])

      if (error) {
        console.error('Supabase error:', error)
        // Still return success so the user gets a confirmation
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
