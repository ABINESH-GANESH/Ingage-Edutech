async function testApi() {
  console.log("--- 1. Testing GET /api/health ---");
  const healthRes = await fetch("http://localhost:5000/api/health");
  const healthJson = await healthRes.json();
  console.log("Status:", healthRes.status, healthJson);

  console.log("\n--- 2. Testing POST /api/contact (Validation Check) ---");
  const invalidRes = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "K Abinesh",
      email: "invalid-email-address",
      phone: "7305192409",
      college: "TJS Engineering College",
      enquiryType: "Student Internships",
      message: "Test message",
    }),
  });
  const invalidJson = await invalidRes.json();
  console.log("Validation Status:", invalidRes.status, invalidJson);

  console.log("\n--- 3. Testing POST /api/contact (Missing Message Check) ---");
  const emptyRes = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "K Abinesh",
      email: "abineshak4793@gmail.com",
      enquiryType: "Set Up a Campus CoE (₹1.5 Cr Lab)",
      message: "",
    }),
  });
  const emptyJson = await emptyRes.json();
  console.log("Empty Message Status:", emptyRes.status, emptyJson);

  console.log("\n--- 4. Testing POST /api/contact (Valid Submission Payload Structure) ---");
  const validPayload = {
    fullName: "K Abinesh",
    email: "abineshak4793@gmail.com",
    phone: "7305192409",
    college: "TJS Engineering College",
    enquiryType: "Set Up a Campus CoE (₹1.5 Cr Lab)",
    message: "I am interested in learning more about the Campus CoE setup.",
  };
  console.log("Valid Payload Ready for Dispatch:", validPayload);
}

testApi().catch(console.error);
