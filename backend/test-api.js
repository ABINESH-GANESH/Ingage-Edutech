/**
 * InGage EduTech Backend API Test Suite
 */
async function testApi() {
  const BASE_URL = "http://localhost:5000/api";

  console.log("=========================================");
  console.log("🧪 InGage EduTech API Validation Suite");
  console.log("=========================================");

  // 1. Health Check
  console.log("\n--- 1. Testing GET /api/health ---");
  try {
    const healthRes = await fetch(`${BASE_URL}/health`);
    const healthJson = await healthRes.json();
    console.log(`[Status ${healthRes.status}] Health response:`, healthJson);
  } catch (err) {
    console.error("Health check failed (Server might not be running):", err.message);
    return;
  }

  // 2. Validation Check on Contact
  console.log("\n--- 2. Testing POST /api/contact (Validation: Invalid Email) ---");
  const invalidRes = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "Test User",
      email: "invalid-email-string",
      phone: "9876543210",
      college: "Test University",
      enquiryType: "Student Internships",
      message: "Test enquiry message",
    }),
  });
  const invalidJson = await invalidRes.json();
  console.log(`[Status ${invalidRes.status}] Response:`, invalidJson);

  // 3. Applications Route Check
  console.log("\n--- 3. Testing POST /api/applications (Validation: Missing Name) ---");
  const appRes = await fetch(`${BASE_URL}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "test@example.com",
      programType: "Course Track",
      preferredTrack: "XR & Metaverse",
    }),
  });
  const appJson = await appRes.json();
  console.log(`[Status ${appRes.status}] Response:`, appJson);

  console.log("\n=========================================");
  console.log("✅ API Test Suite completed!");
  console.log("=========================================");
}

testApi().catch(console.error);
