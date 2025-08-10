// src/app/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-neutral-400 max-w-xl mx-auto">
          For commissions, print inquiries, or collaborations, please reach out.
        </p>
        <a
          href="mailto:contact@example.com" // Replace with Ntikana's actual email
          className="mt-8 inline-block text-2xl font-medium text-neutral-100 hover:text-blue-400 transition-colors"
        >
          contact@example.com
        </a>
      </div>
    </section>
  );
}