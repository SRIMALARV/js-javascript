const companies = [
    { name: "Google", startTime: "09:00", closeTime: "17:00", country: "USA", Offset: -5 },
    { name: "TCS", startTime: "08:00", closeTime: "16:00", country: "India", Offset: 5.5 },
    { name: "bbc", startTime: "10:00", closeTime: "18:00", country: "UK", Offset: 0 },
    { name: "Canva", startTime: "09:00", closeTime: "17:00", country: "Australia", Offset: 11 },
    { name: "Sony", startTime: "08:00", closeTime: "20:00", country: "Japan", Offset: 9 },
    { name: "Siemens", startTime: "10:00", closeTime: "19:00", country: "Germany", Offset: 1 },
    { name: "Petrobras", startTime: "06:00", closeTime: "14:00", country: "Brazil", Offset: -3 },
    { name: "Melsoft", startTime: "07:00", closeTime: "15:00", country: "South Africa", Offset: 2 },
    { name: "Microsoft", startTime: "09:00", closeTime: "18:00", country: "Canada", Offset: -5 },
  ];

  function isCompanyOpen(company, userOffset) {
    const now = new Date();
    const currentUTC = now.getUTCHours() + now.getUTCMinutes() / 60;

    const [startHours, startMinutes] = company.startTime.split(":").map(Number);
    const [closeHours, closeMinutes] = company.closeTime.split(":").map(Number);
    const companyOpenUTC = startHours - company.Offset + startMinutes / 60;
    const companyCloseUTC = closeHours - company.Offset + closeMinutes / 60;

    const userCurrentTime = currentUTC + userOffset;

    return userCurrentTime >= companyOpenUTC && userCurrentTime <= companyCloseUTC;
  }

  function checkCompanyStatuses(userOffset) {
    const results = document.getElementById("results");
    results.innerHTML = "";

    companies.forEach((company) => {
      const status = isCompanyOpen(company, userOffset) ? "Open" : "Closed";
      const listItem = document.createElement("li");
      listItem.textContent = `${company.name} (${company.country}) is ${status}`;
      listItem.classList.add(status === "Open" ? "status-open" : "status-closed");
      const timeInfo = document.createElement("div");
      timeInfo.textContent = `Open: ${company.startTime} | Close: ${company.closeTime}`;
      listItem.append(timeInfo);
      timeInfo.style.color = "#555";
      results.appendChild(listItem);
    });
  }

  document.getElementById("checkStatus").addEventListener("click", () => {
    const countryDropdown = document.getElementById("country");
    const selectedOption = countryDropdown.options[countryDropdown.selectedIndex];
    const userOffset = parseFloat(selectedOption.getAttribute("user-offset"));

    checkCompanyStatuses(userOffset);
  });