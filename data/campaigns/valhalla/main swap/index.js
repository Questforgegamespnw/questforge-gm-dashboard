import { currentLoadout } from "./current_loadout.js";

import {
    getCampaignDataForArc as getValhallaDataForArc
} from "./valhalla/index.js";

import {
    getCampaignDataForArc as getPlaceholderDataForArc
} from "./campaign_placeholder/index.js";

const campaignRegistry = {
    valhalla: {
        id: "valhalla",
        label: "Valhalla",
        getCampaignDataForArc: getValhallaDataForArc
    },

    campaign_placeholder: {
        id: "campaign_placeholder",
        label: "Campaign Placeholder",
        getCampaignDataForArc: getPlaceholderDataForArc
    }
};

export const availableCampaigns = Object.values(campaignRegistry).map(
    (campaign) => ({
        id: campaign.id,
        label: campaign.label
    })
);

export function getCampaignDataForArc(arcId) {
    return getCampaignData(
        currentLoadout.campaignId,
        arcId
    );
}

export function getCampaignData(
    campaignId = currentLoadout.campaignId,
    arcId = currentLoadout.arcId
) {
    const campaign =
        campaignRegistry[campaignId] ??
        campaignRegistry.valhalla;

    const data = campaign.getCampaignDataForArc(arcId);

    return {
        ...data,
        availableCampaigns
    };
}

export const campaignData = getCampaignData();