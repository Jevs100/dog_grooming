export default function BookingForm() {
    return <section className="booking-form" id="contact">
        <h2>Book an Appointment</h2>
        <form action="https://formspree.io/f/mayvlgqj" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="_replyto" required />

            <label htmlFor="service">Service:</label>
            <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="wash-tidy">Wash & Tidy</option>
                <option value="full-groom">Full Groom</option>
                <option value="puppy-groom">Puppy Groom</option>
            </select>

            <label htmlFor="date">Preferred Date:</label>
            <input type="date" id="date" name="date" required />

            <button type="submit">Book Now</button>
        </form>
    </section>
}