import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import CTAButton from "@/components/CTAButton";
import { mapToQuickBooksClient } from "@/utils/quickbooks";

 
type SignUpForm = {
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
  phone?: string;
  plan?: string;
  annual?: string; // "1" or "0"
};

 
export default function SignUp() {
  const router = useRouter();
  const query = router.query;
  const { register, handleSubmit, watch } = useForm<SignUpForm>({
    defaultValues: {
      plan: typeof query.plan === "string" ? query.plan : undefined,
      annual: typeof query.annual === "string" ? query.annual : undefined,
    },
  });

 
  async function onSubmit(data: SignUpForm) {
    // Build QuickBooks-format client object (placeholder)
    const quickbooksClient = mapToQuickBooksClient({
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      email: data.email,
      phone: data.phone,
      selectedPlan: data.plan,
      billingAnnual: data.annual === "1",
    });

    // For now, just console.log and POST to /api/signup (you can integrate with QuickBooks via OAuth on server side)
    console.log("QuickBooks client payload:", quickbooksClient);

    // Example fetch to your API route - replace with actual integration
    try {
      await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quickbooksClient }),
      });
      alert("Thanks! Your signup was received.");
      router.push("/"); // redirect home or dashboard
    } catch (e) {
      console.error(e);
      alert("Error submitting signup.");
    }
  }

  const selectedPlan = watch("plan");


  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Get Started</h2>
        <p className="text-slate-600 mt-1">Sign up and we will contact you to complete onboarding and QuickBooks connection.</p>
        <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input {...register("firstName", { required: true })} placeholder="First name" className="p-3 border rounded" />
            <input {...register("lastName", { required: true })} placeholder="Last name" className="p-3 border rounded" />
          </div>
          <input {...register("companyName")} placeholder="Company name" className="p-3 border rounded" />
          <input {...register("email", { required: true })} placeholder="Email" className="p-3 border rounded" />
          <input {...register("phone")} placeholder="Phone" className="p-3 border rounded" />
          <div>
            <label className="text-sm text-slate-700">Plan</label>
            <select {...register("plan")} className="mt-1 p-3 border rounded w-full">
              <option value="lite">Lite</option>
              <option value="base">Base</option>
              <option value="base_plus">Base+</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          <div>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" {...register("annual")} value="1" /> <span>Bill Annually</span>
            </label>
          </div>

          <div>
            <CTAButton type="submit">Complete Signup</CTAButton>
          </div>

          <div className="text-sm text-slate-500">
            Selected plan: <strong>{selectedPlan}</strong>
          </div>
        </form>
      </div>
    </section>
  );
}