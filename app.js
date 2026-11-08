/**
 * AY Studios Authentic Gift Tracker Application Engine - Deluxe Edition
 * Matches Etsy Listing: "Christmas Gift Tracker App Holiday Gift Planner"
 */

// Exact dataset matching AY Studios Etsy screenshots
const AY_STUDIOS_DEMO_DATA = {
  seasonTitle: "Christmas 2026",
  targetDate: "2026-12-25",
  totalBudget: 1538.00,
  recipients: [
    { id: "r_mom", name: "Mom", group: "Family", budget: 100.00, icon: "wreath" },
    { id: "r_dad", name: "Dad", group: "Family", budget: 100.00, icon: "wreath" },
    { id: "r_emily", name: "Emily", group: "Friends", budget: 100.00, icon: "mug" },
    { id: "r_olivia", name: "Olivia", group: "Friends", budget: 120.00, icon: "mug" },
    { id: "r_michael", name: "Michael", group: "Coworkers", budget: 60.00, icon: "card" },
    { id: "r_sophia", name: "Sophia", group: "Family", budget: 150.00, icon: "wreath" },
    { id: "r_david", name: "David", group: "Family", budget: 200.00, icon: "wreath" },
    { id: "r_son", name: "Son", group: "Kids", budget: 90.00, icon: "gingerbread" },
    { id: "r_anna", name: "Anna", group: "Kids", budget: 120.00, icon: "gingerbread" },
    { id: "r_daniel", name: "Daniel", group: "Kids", budget: 60.00, icon: "gingerbread" }
  ],
  gifts: [
    { id: "g_1", recipientId: "r_dad", name: "Leather Wallet", store: "Macy's", budget: 70.00, actual: 60.00, bought: true, wrapped: true, sent: false, delivery: "In Person" },
    { id: "g_2", recipientId: "r_emily", name: "Jewelry Set", store: "Etsy.com", budget: 80.00, actual: 82.00, bought: true, wrapped: true, sent: false, delivery: "Mail" },
    { id: "g_3", recipientId: "r_olivia", name: "Wireless Headphones", store: "Amazon", budget: 120.00, actual: 115.00, bought: true, wrapped: true, sent: false, delivery: "Mail" },
    { id: "g_4", recipientId: "r_michael", name: "Knitted Blanket", store: "Target", budget: 60.00, actual: 55.00, bought: true, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_5", recipientId: "r_sophia", name: "Classic Watch", store: "Fossil.com", budget: 150.00, actual: 120.00, bought: true, wrapped: true, sent: false, delivery: "In Person" },
    { id: "g_6", recipientId: "r_david", name: "Smartwatch", store: "Best Buy", budget: 200.00, actual: 210.00, bought: true, wrapped: true, sent: false, delivery: "In Person" },
    { id: "g_7", recipientId: "r_son", name: "LEGO Set", store: "Lego.com", budget: 90.00, actual: 85.00, bought: true, wrapped: true, sent: false, delivery: "In Person" },
    { id: "g_8", recipientId: "r_anna", name: "American Girl Doll", store: "americangirl.com", budget: 120.00, actual: 125.00, bought: true, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_9", recipientId: "r_daniel", name: "Hoodie", store: "Nike.com", budget: 60.00, actual: 55.00, bought: true, wrapped: true, sent: true, delivery: "Mail" },
    { id: "g_10", recipientId: "r_mom", name: "Makeup Kit", store: "Ulta", budget: 50.00, actual: 52.00, bought: false, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_11", recipientId: "r_emily", name: "Wine Set", store: "Total Wine", budget: 200.00, actual: 200.00, bought: true, wrapped: true, sent: false, delivery: "Mail" },
    { id: "g_12", recipientId: "r_olivia", name: "Planner", store: "Papier.com", budget: 28.00, actual: 28.00, bought: false, wrapped: false, sent: false, delivery: "Mail" },
    { id: "g_13", recipientId: "r_michael", name: "Coffee Maker", store: "Walmart", budget: 85.00, actual: 83.00, bought: true, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_14", recipientId: "r_dad", name: "Grill Tool Set", store: "Target", budget: 45.00, actual: 0.00, bought: false, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_15", recipientId: "r_sophia", name: "Scented Candle Set", store: "Etsy.com", budget: 40.00, actual: 0.00, bought: false, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_16", recipientId: "r_son", name: "Board Game", store: "Amazon", budget: 35.00, actual: 0.00, bought: false, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_17", recipientId: "r_anna", name: "Craft Kit", store: "Target", budget: 25.00, actual: 0.00, bought: false, wrapped: false, sent: false, delivery: "In Person" },
    { id: "g_18", recipientId: "r_daniel", name: "Water Bottle", store: "Nike.com", budget: 30.00, actual: 0.00, bought: false, wrapped: false, sent: false, delivery: "Mail" },
    { id: "g_19", recipientId: "r_mom", name: "Cashmere Sweater", store: "Nordstrom", budget: 50.00, actual: 40.00, bought: true, wrapped: true, sent: false, delivery: "In Person" }
  ],
  ideas: [
    { id: "idea_1", recipientId: "r_mom", title: "Aromatherapy Diffuser", price: 35.00 },
    { id: "idea_2", recipientId: "r_dad", title: "Thermal Golf Gloves", price: 28.00 },
    { id: "idea_3", recipientId: "r_son", title: "Super Mario Switch Game", price: 59.99 },
    { id: "idea_4", recipientId: "r_emily", title: "Botanical Silk Pillowcase", price: 40.00 }
  ]
};

const FESTIVE_ICON_MAP = {
  wreath: "🟢",
  mug: "☕",
  card: "✉️",
  gingerbread: "🍪"
};

// Application State
let appState = {
  seasonTitle: "Christmas 2026",
  targetDate: "2026-12-25",
  totalBudget: 1538.00,
  recipients: [],
  gifts: [],
  ideas: [],
  snowEnabled: true,
  darkMode: false
};

// Global Tab Switching
window.switchTab = function(tabId) {
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

  const targetBtn = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add("active");

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add("active");
};

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  applyTheme();
  setupNav();
  setupCountdown();
  setupModals();
  initSnow();
  renderApp();
});

// Load state from localStorage or demo data
function loadData() {
  const saved = localStorage.getItem("ay_gift_tracker_data");
  if (saved) {
    try {
      appState = { ...appState, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Error loading saved data, resetting to demo", e);
      resetToDemo();
    }
  } else {
    resetToDemo();
  }
}

function saveData() {
  localStorage.setItem("ay_gift_tracker_data", JSON.stringify({
    seasonTitle: appState.seasonTitle,
    targetDate: appState.targetDate,
    totalBudget: appState.totalBudget,
    recipients: appState.recipients,
    gifts: appState.gifts,
    ideas: appState.ideas,
    darkMode: appState.darkMode,
    snowEnabled: appState.snowEnabled
  }));
}

function resetToDemo() {
  appState.seasonTitle = AY_STUDIOS_DEMO_DATA.seasonTitle;
  appState.targetDate = AY_STUDIOS_DEMO_DATA.targetDate;
  appState.totalBudget = AY_STUDIOS_DEMO_DATA.totalBudget;
  appState.recipients = JSON.parse(JSON.stringify(AY_STUDIOS_DEMO_DATA.recipients));
  appState.gifts = JSON.parse(JSON.stringify(AY_STUDIOS_DEMO_DATA.gifts));
  appState.ideas = JSON.parse(JSON.stringify(AY_STUDIOS_DEMO_DATA.ideas));
  saveData();
  renderApp();
}

// ==========================================================================
// RENDER ENGINE - 100% Mathematically Derived from User Data
// ==========================================================================

// Helper: Calculate amount spent on a gift (Only counts if marked 'Bought')
function getGiftSpentAmount(gift) {
  if (!gift.bought) return 0;
  // If bought, use actual price if entered > 0; otherwise use planned budget price
  const actual = Number(gift.actual);
  const budget = Number(gift.budget);
  return (actual > 0 ? actual : budget) || 0;
}

function renderApp() {
  document.getElementById("displaySeasonTitle").textContent = appState.seasonTitle;
  document.getElementById("settingSeasonName").value = appState.seasonTitle;
  document.getElementById("settingTargetDate").value = appState.targetDate;

  renderKPIsAndDonuts();
  renderBudgetVsActualChart();
  renderSplitLists();
  renderGiftsTable();
  renderRecipientsGrid();
  renderIdeaBank();
  renderShoppingList();
  populateRecipientSelects();
  updateBudgetHelperShortcuts();
}

// 1. KPI Stat Cards & Donut Progress Circles (Live Real-Time Math)
function renderKPIsAndDonuts() {
  const totalGifts = appState.gifts.length;

  let totalSpent = 0;
  let totalGiftBudgets = 0;
  let countBought = 0;
  let countWrapped = 0;
  let countSent = 0;

  appState.gifts.forEach(g => {
    totalGiftBudgets += (Number(g.budget) || 0);
    totalSpent += getGiftSpentAmount(g);
    if (g.bought) countBought++;
    if (g.wrapped) countWrapped++;
    if (g.sent) countSent++;
  });

  // Calculate sum of recipients' budgets
  const totalRecipientsBudget = appState.recipients.reduce((sum, r) => sum + (Number(r.budget) || 0), 0);

  // Overall Budget is set by user, or falls back to recipients/gifts sum
  let activeBudget = Number(appState.totalBudget);
  if (isNaN(activeBudget) || activeBudget <= 0) {
    activeBudget = totalRecipientsBudget > 0 ? totalRecipientsBudget : totalGiftBudgets;
  }

  const leftToSpend = activeBudget - totalSpent;
  const pctSpentOfBudget = activeBudget > 0 ? Math.round((totalSpent / activeBudget) * 100) : 0;

  // Update Top 4 KPI Cards
  document.getElementById("kpiTotalBudget").textContent = `$${activeBudget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("kpiTotalSpent").textContent = `$${totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById("kpiSpentSubtext").textContent = `${pctSpentOfBudget}% of budget spent`;
  
  const leftEl = document.getElementById("kpiLeftToSpend");
  const remSubEl = document.getElementById("kpiRemainingSubtext");
  
  if (leftToSpend < 0) {
    leftEl.className = "kpi-value diff-positive"; // red alert
    leftEl.textContent = `-$${Math.abs(leftToSpend).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    remSubEl.textContent = `⚠️ Over budget by $${Math.abs(leftToSpend).toFixed(2)}`;
    remSubEl.style.color = "var(--festive-red)";
  } else {
    leftEl.className = "kpi-value text-green";
    leftEl.textContent = `$${leftToSpend.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    remSubEl.textContent = `${activeBudget > 0 ? (100 - pctSpentOfBudget) + '% remaining' : 'Safe remaining balance'}`;
    remSubEl.style.color = "";
  }

  document.getElementById("kpiGiftsTotal").textContent = totalGifts;
  document.getElementById("kpiRecipientsCount").textContent = `Across ${appState.recipients.length} people`;
  document.getElementById("giftsTabCount").textContent = `${totalGifts} gifts`;

  // Update 3 Donut Progress Rings (Strictly based on user's target items)
  const pctBought = totalGifts > 0 ? Math.round((countBought / totalGifts) * 100) : 0;
  const pctWrapped = totalGifts > 0 ? Math.round((countWrapped / totalGifts) * 100) : 0;
  const pctSent = totalGifts > 0 ? Math.round((countSent / totalGifts) * 100) : 0;

  updateDonut("donutBoughtCircle", "donutBoughtPercent", "donutBoughtRatio", pctBought, `${countBought}/${totalGifts} gifts bought`);
  updateDonut("donutWrappedCircle", "donutWrappedPercent", "donutWrappedRatio", pctWrapped, `${countWrapped}/${totalGifts} gifts wrapped`);
  updateDonut("donutSentCircle", "donutSentPercent", "donutSentRatio", pctSent, `${countSent}/${totalGifts} gifts sent`);
}

function updateDonut(circleId, labelId, ratioId, percentage, ratioText) {
  const circle = document.getElementById(circleId);
  const label = document.getElementById(labelId);
  const ratio = document.getElementById(ratioId);

  const circumference = 238.76;
  const offset = circumference - (percentage / 100) * circumference;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${offset}`;
  label.textContent = `${percentage}%`;
  ratio.textContent = ratioText;
}

// 2. Budget vs Actual Bar Chart by Recipient (Image 2)
function renderBudgetVsActualChart() {
  const container = document.getElementById("budgetVsActualChart");
  container.innerHTML = "";

  if (appState.recipients.length === 0) {
    container.innerHTML = `<div style="margin: auto; color: var(--text-muted); font-size: 0.9rem; padding: 2rem;">No recipients added yet. Click "+ Add Recipient" to begin!</div>`;
    return;
  }

  // Find max value to scale bars proportionally
  let maxValue = 100;
  appState.recipients.forEach(r => {
    const rGifts = appState.gifts.filter(g => g.recipientId === r.id);
    const rSpent = rGifts.reduce((acc, g) => acc + getGiftSpentAmount(g), 0);
    maxValue = Math.max(maxValue, r.budget || 0, rSpent);
  });

  appState.recipients.forEach(r => {
    const rGifts = appState.gifts.filter(g => g.recipientId === r.id);
    const rSpent = rGifts.reduce((acc, g) => acc + getGiftSpentAmount(g), 0);
    const budget = Number(r.budget) || 0;

    const budgetHeight = Math.max(6, Math.round((budget / maxValue) * 135));
    const actualHeight = Math.max(6, Math.round((rSpent / maxValue) * 135));
    const isOver = rSpent > budget;

    const groupDiv = document.createElement("div");
    groupDiv.className = "chart-column-group";
    groupDiv.innerHTML = `
      <div class="bars-pair">
        <div class="bar bar-budget" style="height: ${budgetHeight}px;" data-tooltip="${escapeHtml(r.name)} Cap: $${budget.toFixed(2)}"></div>
        <div class="bar bar-actual ${isOver ? 'over' : ''}" style="height: ${actualHeight}px;" data-tooltip="${escapeHtml(r.name)} Spent: $${rSpent.toFixed(2)}"></div>
      </div>
      <div class="bar-person-name">${escapeHtml(r.name)}</div>
    `;
    container.appendChild(groupDiv);
  });
}

// 3. Over Budget Recipients & Still to Buy
function renderSplitLists() {
  // Over budget recipients
  const overList = document.getElementById("overBudgetList");
  overList.innerHTML = "";

  const overRecipients = [];
  appState.recipients.forEach(r => {
    const rGifts = appState.gifts.filter(g => g.recipientId === r.id);
    const rSpent = rGifts.reduce((acc, g) => acc + getGiftSpentAmount(g), 0);
    const diff = rSpent - (Number(r.budget) || 0);
    if (diff > 0) {
      overRecipients.push({ name: r.name, overAmount: diff });
    }
  });

  if (overRecipients.length === 0) {
    overList.innerHTML = `
      <div style="font-size: 0.88rem; color: var(--festive-green); font-weight: 700; padding: 0.75rem; text-align: center;">
        ✨ All recipients are currently within budget!
      </div>
    `;
  } else {
    overRecipients.forEach(item => {
      const row = document.createElement("div");
      row.className = "split-row";
      row.innerHTML = `
        <span class="split-row-name">
          <span style="font-size: 1rem;">⚠️</span> ${escapeHtml(item.name)}
        </span>
        <span class="over-amount">+$${item.overAmount.toFixed(2)}</span>
      `;
      overList.appendChild(row);
    });
  }

  // Still to buy list (unbought gifts)
  const stillList = document.getElementById("stillToBuyList");
  stillList.innerHTML = "";

  const unboughtGifts = appState.gifts.filter(g => !g.bought);
  if (unboughtGifts.length === 0) {
    stillList.innerHTML = `
      <div style="font-size: 0.88rem; color: var(--festive-green); font-weight: 700; padding: 0.75rem; text-align: center;">
        🎉 All holiday gifts have been purchased!
      </div>
    `;
  } else {
    const displayGifts = unboughtGifts.slice(0, 6);
    displayGifts.forEach(g => {
      const rec = appState.recipients.find(r => r.id === g.recipientId);
      const row = document.createElement("div");
      row.className = "split-row";
      row.innerHTML = `
        <div class="split-row-name">
          <label class="custom-check-container" style="margin-right: 0.4rem;">
            <input type="checkbox" onchange="toggleGiftCheck('${g.id}', 'bought')">
            <span class="custom-check-box" style="width: 17px; height: 17px;">
              <svg class="check-icon" viewBox="0 0 12 10"><polyline points="1.5 5 4.5 8 10.5 1.5"></polyline></svg>
            </span>
          </label>
          <span>${escapeHtml(rec ? rec.name : "Someone")} — ${escapeHtml(g.name)}</span>
        </div>
        <span class="buy-amount">$${(Number(g.budget) || Number(g.actual) || 0).toFixed(2)}</span>
      `;
      stillList.appendChild(row);
    });

    if (unboughtGifts.length > 6) {
      const moreRow = document.createElement("div");
      moreRow.className = "see-more-link";
      moreRow.textContent = `+${unboughtGifts.length - 6} more, see Gifts tab →`;
      moreRow.onclick = () => switchTab("tabGifts");
      stillList.appendChild(moreRow);
    }
  }
}

// 4. Recipients Grid - "A Budget Card For Every Person" (With Edit & Remove Options)
let selectedRecGroupFilter = "all";

function renderRecipientsGrid() {
  const grid = document.getElementById("recipientsCardsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  // Update Overview Banner stats dynamically from real state
  const totalPeople = appState.recipients.length;
  const totalAllocated = appState.recipients.reduce((acc, r) => acc + (Number(r.budget) || 0), 0);
  const totalSpent = appState.gifts.reduce((acc, g) => acc + getGiftSpentAmount(g), 0);
  const overCount = appState.recipients.filter(r => {
    const rGifts = appState.gifts.filter(g => g.recipientId === r.id);
    const rSpent = rGifts.reduce((acc, g) => acc + getGiftSpentAmount(g), 0);
    return rSpent > (Number(r.budget) || 0);
  }).length;

  const totalPeopleEl = document.getElementById("recOverviewTotalPeople");
  const totalAllocatedEl = document.getElementById("recOverviewTotalAllocated");
  const totalSpentEl = document.getElementById("recOverviewTotalSpent");
  const overCountEl = document.getElementById("recOverviewOverCount");

  if (totalPeopleEl) totalPeopleEl.textContent = totalPeople;
  if (totalAllocatedEl) totalAllocatedEl.textContent = `$${totalAllocated.toFixed(2)}`;
  if (totalSpentEl) totalSpentEl.textContent = `$${totalSpent.toFixed(2)}`;
  if (overCountEl) {
    overCountEl.textContent = `${overCount} ${overCount === 1 ? 'Person' : 'People'}`;
    overCountEl.className = overCount > 0 ? "rec-stat-val text-danger" : "rec-stat-val text-green";
  }

  if (appState.recipients.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem; background: var(--bg-card); border-radius: 16px; border: 1px dashed var(--border-card);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">👥</div>
        <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.25rem;">No recipients yet</h3>
        <p style="font-size: 0.88rem;">Click "+ Add Recipient" above to add family, friends or kids to your Christmas list!</p>
      </div>
    `;
    return;
  }

  let listToRender = appState.recipients;
  if (selectedRecGroupFilter && selectedRecGroupFilter !== "all") {
    listToRender = listToRender.filter(r => (r.group || "").toLowerCase() === selectedRecGroupFilter.toLowerCase());
  }

  if (listToRender.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2.5rem; background: var(--bg-card); border-radius: 16px; border: 1px dashed var(--border-card);">
        <p style="font-size: 0.95rem; font-weight: 600;">No people found in group "<strong>${escapeHtml(selectedRecGroupFilter)}</strong>".</p>
      </div>
    `;
    return;
  }

  listToRender.forEach(r => {
    const rGifts = appState.gifts.filter(g => g.recipientId === r.id);
    const rSpent = rGifts.reduce((acc, g) => acc + getGiftSpentAmount(g), 0);
    const budget = Number(r.budget) || 0;
    const isOver = rSpent > budget;

    const pct = budget > 0 ? Math.min(Math.round((rSpent / budget) * 100), 100) : 0;
    const groupLower = (r.group || "family").toLowerCase();

    const card = document.createElement("div");
    card.className = "person-budget-card";
    card.innerHTML = `
      <div>
        <div class="person-card-top">
          <span class="person-name">${escapeHtml(r.name)}</span>
          <span class="group-tag tag-${groupLower}">${escapeHtml(r.group)}</span>
        </div>
        <div class="person-spend-info">
          ${rGifts.length} gift${rGifts.length === 1 ? '' : 's'} · $${rSpent.toFixed(2)} of $${budget.toFixed(2)}
        </div>
        <div class="person-progress-bg">
          <div class="person-progress-fill ${isOver ? 'over-limit' : ''}" style="width: ${isOver ? 100 : pct}%;"></div>
        </div>
      </div>
      <div class="person-card-bottom">
        <div style="display:flex; gap:0.6rem; align-items:center;">
          <button class="person-btn-action" onclick="editRecipient('${r.id}')" title="Change name or budget">✏️ Edit</button>
          <button class="person-btn-action delete" onclick="removeRecipient('${r.id}')" title="Remove person">🗑️ Remove</button>
        </div>
        <span class="person-festive-icon">${FESTIVE_ICON_MAP[r.icon] || "🟢"}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 5. Gifts Table - "Bought, Wrapped, Sent, One Tap Each" (Exact match to User Image)
function renderGiftsTable() {
  const tbody = document.getElementById("giftsTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const searchInput = document.getElementById("giftSearchInput");
  const groupFilter = document.getElementById("giftGroupFilter");
  const statusFilter = document.getElementById("giftStatusFilter");

  const searchVal = (searchInput ? searchInput.value : "").toLowerCase().trim();
  const groupVal = groupFilter ? groupFilter.value : "all";
  const statusVal = statusFilter ? statusFilter.value : "all";

  // Filter gifts mathematically based on active controls
  const filteredGifts = appState.gifts.filter(g => {
    const rec = appState.recipients.find(r => r.id === g.recipientId);
    const recName = (rec ? rec.name : "").toLowerCase();
    const groupName = (rec ? rec.group : "Family").toLowerCase();
    const giftName = (g.name || "").toLowerCase();
    const storeName = (g.store || "").toLowerCase();

    // Text search
    if (searchVal) {
      const matchesSearch = giftName.includes(searchVal) || 
                            storeName.includes(searchVal) || 
                            recName.includes(searchVal);
      if (!matchesSearch) return false;
    }

    // Group filter
    if (groupVal !== "all") {
      if (groupName !== groupVal.toLowerCase()) return false;
    }

    // Status filter
    if (statusVal === "to_buy" && g.bought) return false;
    if (statusVal === "bought" && !g.bought) return false;
    if (statusVal === "wrapped" && !g.wrapped) return false;
    if (statusVal === "sent" && !g.sent) return false;

    return true;
  });

  // Update header counter badge
  const countBadge = document.getElementById("giftsTabCount");
  if (countBadge) {
    countBadge.textContent = `${filteredGifts.length} gift${filteredGifts.length === 1 ? '' : 's'}`;
  }

  // Calculate totals for summary strip
  let totalFilteredBudget = 0;
  let totalFilteredSpent = 0;

  if (filteredGifts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="12" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">🎁</div>
          <p>No gifts matching your search or filter criteria.</p>
        </td>
      </tr>
    `;
  } else {
    filteredGifts.forEach(g => {
      const rec = appState.recipients.find(r => r.id === g.recipientId);
      const groupName = rec ? rec.group : "Family";
      const groupClass = groupName.toLowerCase();
      const recName = rec ? rec.name : "Unknown";

      const budget = Number(g.budget) || 0;
      const actual = Number(g.actual) || 0;
      totalFilteredBudget += budget;
      totalFilteredSpent += getGiftSpentAmount(g);

      const diff = actual - budget;
      // Exactly matching screenshot: -$10.00 or +$2.00 in bold dark text
      const diffText = diff > 0 ? `+$${diff.toFixed(2)}` : (diff < 0 ? `-$${Math.abs(diff).toFixed(2)}` : "$0.00");

      const tr = document.createElement("tr");
      tr.className = "gift-table-row";
      tr.setAttribute("data-id", g.id);
      tr.onclick = function(e) {
        if (e.target.closest("input") || e.target.closest("button") || e.target.closest("a") || e.target.closest("label")) return;
        document.querySelectorAll(".gift-table-row").forEach(r => r.classList.remove("selected-row"));
        tr.classList.add("selected-row");
      };
      tr.innerHTML = `
        <td><span class="group-tag tag-${groupClass}">${escapeHtml(groupName)}</span></td>
        <td><strong class="recipient-cell-name">${escapeHtml(recName)}</strong></td>
        <td class="gift-name-cell" title="${escapeHtml(g.name)}">${escapeHtml(g.name)}</td>
        <td class="store-cell" title="${escapeHtml(g.store || '-')}">${escapeHtml(g.store || "-")}</td>
        <td class="price-cell text-right">$${budget.toFixed(2)}</td>
        <td class="price-cell text-right">$${actual.toFixed(2)}</td>
        <td class="diff-cell text-right"><strong>${diffText}</strong></td>
        
        <!-- Custom Forest Green Checkbox 1: BOUGHT -->
        <td class="text-center checkbox-cell">
          <label class="custom-check-container" title="Mark as Bought">
            <input type="checkbox" ${g.bought ? 'checked' : ''} onchange="toggleGiftCheck('${g.id}', 'bought')">
            <span class="custom-check-box">
              <svg class="check-icon" viewBox="0 0 12 10">
                <polyline points="1.5 5 4.5 8 10.5 1.5"></polyline>
              </svg>
            </span>
          </label>
        </td>

        <!-- Custom Forest Green Checkbox 2: WRAPPED -->
        <td class="text-center checkbox-cell">
          <label class="custom-check-container" title="Mark as Wrapped">
            <input type="checkbox" ${g.wrapped ? 'checked' : ''} onchange="toggleGiftCheck('${g.id}', 'wrapped')">
            <span class="custom-check-box">
              <svg class="check-icon" viewBox="0 0 12 10">
                <polyline points="1.5 5 4.5 8 10.5 1.5"></polyline>
              </svg>
            </span>
          </label>
        </td>

        <!-- Custom Forest Green Checkbox 3: SENT -->
        <td class="text-center checkbox-cell">
          <label class="custom-check-container" title="Mark as Sent / Delivered">
            <input type="checkbox" ${g.sent ? 'checked' : ''} onchange="toggleGiftCheck('${g.id}', 'sent')">
            <span class="custom-check-box">
              <svg class="check-icon" viewBox="0 0 12 10">
                <polyline points="1.5 5 4.5 8 10.5 1.5"></polyline>
              </svg>
            </span>
          </label>
        </td>

        <td class="text-center"><span class="delivery-badge-pill">${escapeHtml(g.delivery || "In Person")}</span></td>
        <td class="text-center actions-cell">
          <button class="btn-table-action" onclick="editGift('${g.id}')" title="Edit Gift">✏️</button>
          <button class="btn-table-action" onclick="deleteGift('${g.id}')" title="Delete Gift">🗑️</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Update Summary Strip at bottom of table
  const summaryStrip = document.getElementById("tableSummaryStrip");
  if (summaryStrip) {
    const remaining = totalFilteredBudget - totalFilteredSpent;
    summaryStrip.innerHTML = `
      <div>Showing <strong>${filteredGifts.length}</strong> of ${appState.gifts.length} gifts</div>
      <div>
        Total Budget: <strong>$${totalFilteredBudget.toFixed(2)}</strong> &nbsp;•&nbsp; 
        Spent: <strong class="text-green">$${totalFilteredSpent.toFixed(2)}</strong> &nbsp;•&nbsp; 
        Remaining: <strong class="${remaining < 0 ? 'text-danger' : 'text-green'}">$${remaining.toFixed(2)}</strong>
      </div>
    `;
  }
}

// 6. Idea Bank Tab
function renderIdeaBank() {
  const container = document.getElementById("ideasContainer");
  container.innerHTML = "";

  if (appState.ideas.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No ideas logged yet. Click "+ Add Idea" to capture inspiration!</div>`;
    return;
  }

  appState.ideas.forEach(idea => {
    const rec = appState.recipients.find(r => r.id === idea.recipientId);
    const card = document.createElement("div");
    card.className = "idea-card";
    card.innerHTML = `
      <div>
        <span class="group-tag tag-family" style="margin-bottom: 0.5rem; display: inline-block;">For: ${escapeHtml(rec ? rec.name : "Anyone")}</span>
        <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">${escapeHtml(idea.title)}</h4>
        <div style="font-weight: 700; color: var(--festive-green); font-size: 0.95rem;">~$${(Number(idea.price) || 0).toFixed(2)}</div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-light); padding-top: 0.5rem;">
        <button class="btn-table-action" onclick="convertIdeaToGift('${idea.id}')" style="color: var(--festive-red); font-weight: 800;">+ Convert to Gift</button>
        <button class="btn-table-action" onclick="deleteIdea('${idea.id}')">Remove</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// 7. Shopping List Tab Grouped by Store
function renderShoppingList() {
  const container = document.getElementById("shoppingListByStore");
  container.innerHTML = "";

  const unboughtGifts = appState.gifts.filter(g => !g.bought);
  if (unboughtGifts.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--festive-green); padding: 3rem; font-weight: 700;">🎉 All gifts have been bought! Nothing on your shopping list!</div>`;
    return;
  }

  // Group by store
  const storeMap = {};
  unboughtGifts.forEach(g => {
    const store = g.store || "General / Other";
    if (!storeMap[store]) storeMap[store] = [];
    storeMap[store].push(g);
  });

  for (const [store, items] of Object.entries(storeMap)) {
    const totalEst = items.reduce((sum, item) => sum + (Number(item.budget) || Number(item.actual) || 0), 0);
    const card = document.createElement("div");
    card.className = "store-card";
    card.innerHTML = `
      <div class="store-card-header">
        <h3>🛍️ ${escapeHtml(store)}</h3>
        <span class="counter-badge">${items.length} item${items.length === 1 ? '' : 's'} · $${totalEst.toFixed(2)}</span>
      </div>
      <div>
        ${items.map(it => {
          const rec = appState.recipients.find(r => r.id === it.recipientId);
          return `
            <div class="store-item-row">
              <span style="display:flex; align-items:center; gap:0.4rem;">
                <input type="checkbox" class="table-checkbox" style="width:16px;height:16px;" onchange="toggleGiftCheck('${it.id}', 'bought')">
                <strong>${escapeHtml(it.name)}</strong> (${escapeHtml(rec ? rec.name : "Someone")})
              </span>
              <span style="font-weight: 700; color: var(--festive-green);">$${(Number(it.budget) || 0).toFixed(2)}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    container.appendChild(card);
  }
}

// Populate Recipient Dropdowns
function populateRecipientSelects() {
  const selects = ["fieldGiftRecipient", "fieldIdeaRecipient"];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = "";
    appState.recipients.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = `${r.name} (${r.group})`;
      el.appendChild(opt);
    });
  });
}

// ==========================================================================
// ACTIONS & EVENT LISTENERS
// ==========================================================================

// Checkbox Toggles (Bought, Wrapped, Sent) - Updates Dashboard and Donuts INSTANTLY!
window.toggleGiftCheck = function(giftId, field) {
  const gift = appState.gifts.find(g => g.id === giftId);
  if (gift) {
    gift[field] = !gift[field];
    if (field === 'bought' && gift.bought && Number(gift.actual) === 0) {
      gift.actual = gift.budget;
    }
    saveData();
    renderKPIsAndDonuts();
    renderBudgetVsActualChart();
    renderSplitLists();
    renderRecipientsGrid();
    renderShoppingList();
    renderGiftsTable();
  }
};

window.removeRecipient = function(recipientId) {
  if (confirm("Remove this recipient and their assigned gifts?")) {
    appState.recipients = appState.recipients.filter(r => r.id !== recipientId);
    appState.gifts = appState.gifts.filter(g => g.recipientId !== recipientId);
    saveData();
    renderApp();
  }
};

window.editRecipient = function(recipientId) {
  const rec = appState.recipients.find(r => r.id === recipientId);
  if (!rec) return;

  document.getElementById("fieldRecipientId").value = rec.id;
  document.getElementById("fieldRecipientName").value = rec.name;
  document.getElementById("fieldRecipientGroup").value = rec.group;
  document.getElementById("fieldRecipientBudget").value = rec.budget;
  document.getElementById("fieldRecipientIcon").value = rec.icon || "wreath";

  document.getElementById("modalRecipientTitle").textContent = "✏️ Edit Recipient";
  openDialog("modalRecipient");
};

// Open Set Budget Modal
window.openSetBudgetModal = function() {
  const input = document.getElementById("fieldTotalBudgetAmount");
  input.value = appState.totalBudget || 1500;
  updateBudgetHelperShortcuts();
  openDialog("modalTotalBudget");
};

function updateBudgetHelperShortcuts() {
  const sumRecipients = appState.recipients.reduce((sum, r) => sum + (Number(r.budget) || 0), 0);
  const sumGifts = appState.gifts.reduce((sum, g) => sum + (Number(g.budget) || 0), 0);

  const recValEl = document.getElementById("autoSumRecipientsVal");
  const giftValEl = document.getElementById("autoSumGiftsVal");
  if (recValEl) recValEl.textContent = `$${sumRecipients.toFixed(2)}`;
  if (giftValEl) giftValEl.textContent = `$${sumGifts.toFixed(2)}`;
}

window.deleteGift = function(giftId) {
  if (confirm("Delete this gift?")) {
    appState.gifts = appState.gifts.filter(g => g.id !== giftId);
    saveData();
    renderApp();
  }
};

window.editGift = function(giftId) {
  const gift = appState.gifts.find(g => g.id === giftId);
  if (!gift) return;

  document.getElementById("fieldGiftId").value = gift.id;
  document.getElementById("fieldGiftRecipient").value = gift.recipientId;
  document.getElementById("fieldGiftName").value = gift.name;
  document.getElementById("fieldGiftStore").value = gift.store || "";
  document.getElementById("fieldGiftBudget").value = gift.budget;
  document.getElementById("fieldGiftActual").value = gift.actual;
  document.getElementById("fieldGiftDelivery").value = gift.delivery || "In Person";

  document.getElementById("modalGiftTitle").textContent = "✏️ Edit Gift";
  openDialog("modalGift");
};

window.deleteIdea = function(ideaId) {
  appState.ideas = appState.ideas.filter(i => i.id !== ideaId);
  saveData();
  renderIdeaBank();
};

window.convertIdeaToGift = function(ideaId) {
  const idea = appState.ideas.find(i => i.id !== ideaId);
  if (!idea) return;

  appState.gifts.push({
    id: "g_" + Date.now(),
    recipientId: idea.recipientId,
    name: idea.title,
    store: "",
    budget: idea.price || 50.00,
    actual: 0.00,
    bought: false,
    wrapped: false,
    sent: false,
    delivery: "In Person"
  });

  appState.ideas = appState.ideas.filter(i => i.id !== ideaId);
  saveData();
  renderApp();
  switchTab("tabGifts");
};

// Tabs navigation
function setupNav() {
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Dark Mode Toggle Button
  document.getElementById("themeToggleBtn").addEventListener("click", () => {
    appState.darkMode = !appState.darkMode;
    applyTheme();
    saveData();
  });
}

window.switchTab = function(tabId) {
  document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

  const targetBtn = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add("active");

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add("active");
};

function applyTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (appState.darkMode) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggleBtn.textContent = "🌙";
  }
}

// Deluxe Live Ticking Christmas Countdown Clock (Runs every 1 second)
let countdownInterval = null;

function setupCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  function tick() {
    const target = new Date(appState.targetDate + "T00:00:00");
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    const daysEl = document.getElementById("heroDays");
    const hoursEl = document.getElementById("heroHours");
    const minsEl = document.getElementById("heroMins");
    const secsEl = document.getElementById("heroSecs");
    const textEl = document.getElementById("displayCountdownText");

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "00";
      if (textEl) textEl.textContent = "🎄 Merry Christmas Day! 🎅";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minsEl) minsEl.textContent = String(mins).padStart(2, "0");
    if (secsEl) secsEl.textContent = String(secs).padStart(2, "0");

    if (textEl) {
      textEl.textContent = `${days} Days, ${hours} Hours until Christmas!`;
    }
  }

  tick();
  countdownInterval = setInterval(tick, 1000);
}

// Modals Setup
function setupModals() {
  // Budget Edit Triggers
  const budgetTriggers = ["heroBtnSetBudget", "barBtnSetBudget", "btnEditBudgetInsideCard", "cardBudgetClickable"];
  budgetTriggers.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        openSetBudgetModal();
      });
    }
  });

  // Total Budget Form Submit
  const formBudget = document.getElementById("formTotalBudget");
  if (formBudget) {
    formBudget.addEventListener("submit", (e) => {
      e.preventDefault();
      const newBudget = parseFloat(document.getElementById("fieldTotalBudgetAmount").value) || 0;
      appState.totalBudget = newBudget;
      saveData();
      renderApp();
      closeDialog("modalTotalBudget");
    });
  }

  // Budget Calculator Shortcuts
  const btnSumRec = document.getElementById("btnAutoSumRecipients");
  if (btnSumRec) {
    btnSumRec.addEventListener("click", () => {
      const sum = appState.recipients.reduce((acc, r) => acc + (Number(r.budget) || 0), 0);
      document.getElementById("fieldTotalBudgetAmount").value = sum;
    });
  }

  const btnSumGifts = document.getElementById("btnAutoSumGifts");
  if (btnSumGifts) {
    btnSumGifts.addEventListener("click", () => {
      const sum = appState.gifts.reduce((acc, g) => acc + (Number(g.budget) || 0), 0);
      document.getElementById("fieldTotalBudgetAmount").value = sum;
    });
  }

  // Clean Start (Blank Slate for User)
  const btnStartFresh = document.getElementById("btnStartFresh");
  if (btnStartFresh) {
    btnStartFresh.addEventListener("click", () => {
      if (confirm("Start fresh with an empty list? This lets you enter your own family, friends, and gifts from scratch.")) {
        appState.recipients = [];
        appState.gifts = [];
        appState.ideas = [];
        appState.totalBudget = 500;
        saveData();
        renderApp();
      }
    });
  }

  // Reload Sample Demo Data
  const btnReloadSample = document.getElementById("btnReloadSample");
  if (btnReloadSample) {
    btnReloadSample.addEventListener("click", () => {
      if (confirm("Reload the sample holiday data?")) {
        resetToDemo();
      }
    });
  }

  // Gifts table search & live filtering
  const giftSearchInput = document.getElementById("giftSearchInput");
  if (giftSearchInput) {
    giftSearchInput.addEventListener("input", renderGiftsTable);
  }

  const giftGroupFilter = document.getElementById("giftGroupFilter");
  if (giftGroupFilter) {
    giftGroupFilter.addEventListener("change", renderGiftsTable);
  }

  const giftStatusFilter = document.getElementById("giftStatusFilter");
  if (giftStatusFilter) {
    giftStatusFilter.addEventListener("change", renderGiftsTable);
  }

  // Dedicated Recipients Group Filter Pills
  const recFilterPills = document.querySelectorAll(".rec-filter-pill");
  recFilterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      recFilterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedRecGroupFilter = pill.getAttribute("data-recgroup") || "all";
      renderRecipientsGrid();
    });
  });

  document.getElementById("openAddGiftModalBtn").addEventListener("click", () => {
    document.getElementById("formGift").reset();
    document.getElementById("fieldGiftId").value = "";
    document.getElementById("modalGiftTitle").textContent = "🎁 Add Gift";
    openDialog("modalGift");
  });

  document.getElementById("openAddRecipientModalBtn").addEventListener("click", () => {
    document.getElementById("formRecipient").reset();
    document.getElementById("fieldRecipientId").value = "";
    document.getElementById("modalRecipientTitle").textContent = "🎅 Add Recipient";
    openDialog("modalRecipient");
  });

  document.getElementById("openAddIdeaModalBtn").addEventListener("click", () => {
    document.getElementById("formIdea").reset();
    openDialog("modalIdea");
  });

  // Close buttons
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close");
      closeDialog(modalId);
    });
  });

  // Gift Form Submit
  document.getElementById("formGift").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("fieldGiftId").value;
    const recipientId = document.getElementById("fieldGiftRecipient").value;
    const name = document.getElementById("fieldGiftName").value.trim();
    const store = document.getElementById("fieldGiftStore").value.trim();
    const budget = parseFloat(document.getElementById("fieldGiftBudget").value) || 0;
    const actual = parseFloat(document.getElementById("fieldGiftActual").value) || 0;
    const delivery = document.getElementById("fieldGiftDelivery").value;

    if (id) {
      const existing = appState.gifts.find(g => g.id === id);
      if (existing) {
        existing.recipientId = recipientId;
        existing.name = name;
        existing.store = store;
        existing.budget = budget;
        existing.actual = actual;
        existing.delivery = delivery;
      }
    } else {
      appState.gifts.push({
        id: "g_" + Date.now(),
        recipientId,
        name,
        store,
        budget,
        actual,
        bought: false,
        wrapped: false,
        sent: false,
        delivery
      });
    }

    saveData();
    renderApp();
    closeDialog("modalGift");
  });

  // Recipient Form Submit (Handles both Create & Edit)
  document.getElementById("formRecipient").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("fieldRecipientId").value;
    const name = document.getElementById("fieldRecipientName").value.trim();
    const group = document.getElementById("fieldRecipientGroup").value;
    const budget = parseFloat(document.getElementById("fieldRecipientBudget").value) || 100;
    const icon = document.getElementById("fieldRecipientIcon").value;

    if (id) {
      // Editing existing recipient
      const existing = appState.recipients.find(r => r.id === id);
      if (existing) {
        existing.name = name;
        existing.group = group;
        existing.budget = budget;
        existing.icon = icon;
      }
    } else {
      // Creating new recipient
      appState.recipients.push({
        id: "r_" + Date.now(),
        name,
        group,
        budget,
        icon
      });
    }

    saveData();
    renderApp();
    closeDialog("modalRecipient");
  });

  // Idea Form Submit
  document.getElementById("formIdea").addEventListener("submit", (e) => {
    e.preventDefault();
    const recipientId = document.getElementById("fieldIdeaRecipient").value;
    const title = document.getElementById("fieldIdeaTitle").value.trim();
    const price = parseFloat(document.getElementById("fieldIdeaPrice").value) || 0;

    appState.ideas.push({
      id: "idea_" + Date.now(),
      recipientId,
      title,
      price
    });

    saveData();
    renderIdeaBank();
    closeDialog("modalIdea");
  });

  // Settings Handlers
  document.getElementById("saveSeasonNameBtn").addEventListener("click", () => {
    appState.seasonTitle = document.getElementById("settingSeasonName").value.trim() || "Christmas 2026";
    saveData();
    document.getElementById("displaySeasonTitle").textContent = appState.seasonTitle;
    alert("Season title updated!");
  });

  document.getElementById("saveTargetDateBtn").addEventListener("click", () => {
    appState.targetDate = document.getElementById("settingTargetDate").value;
    saveData();
    setupCountdown();
    alert("Target date updated!");
  });

  document.getElementById("toggleSnowEffectBtn").addEventListener("click", () => {
    appState.snowEnabled = !appState.snowEnabled;
    document.getElementById("toggleSnowEffectBtn").textContent = appState.snowEnabled ? "❄️ Snow: On" : "❄️ Snow: Off";
    saveData();
  });

  document.getElementById("resetToEtsyDemoBtn").addEventListener("click", () => {
    if (confirm("Reset everything back to the exact AY Studios demo dataset?")) {
      resetToDemo();
    }
  });

  document.getElementById("clearAllDataBtn").addEventListener("click", () => {
    if (confirm("Are you sure? This will clear all recipients and gifts.")) {
      appState.recipients = [];
      appState.gifts = [];
      appState.ideas = [];
      saveData();
      renderApp();
    }
  });
}

function openDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

function closeDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && typeof dialog.close === "function") {
    dialog.close();
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Gentle Falling Snow Effect
function initSnow() {
  const canvas = document.getElementById("snowCanvas");
  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const flakes = [];
  for (let i = 0; i < 45; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.7 + 0.3,
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function renderSnow() {
    ctx.clearRect(0, 0, width, height);
    if (appState.snowEnabled) {
      ctx.fillStyle = appState.darkMode ? "rgba(255, 255, 255, 0.45)" : "rgba(180, 195, 185, 0.35)";
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
        f.y += f.speed;
        if (f.y > height) {
          f.y = -5;
          f.x = Math.random() * width;
        }
      }
    }
    requestAnimationFrame(renderSnow);
  }

  renderSnow();
}
