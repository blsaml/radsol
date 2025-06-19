
        $(function () {
            Roblox.CookieUpgrader.domain = 'roblox.com';
            Roblox.CookieUpgrader.upgrade("GuestData", { expires: Roblox.CookieUpgrader.thirtyYearsFromNow });

                    Roblox.CookieUpgrader.upgrade("RBXSessionTracker", { expires: Roblox.CookieUpgrader.fourHoursFromNow });
                
                    Roblox.CookieUpgrader.upgrade("RBXEventTrackerV2", {expires: Roblox.CookieUpgrader.thirtyYearsFromNow});
                        });
    