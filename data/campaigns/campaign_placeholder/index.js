import { campaignPlaceholder } from "./campaign.js";
import { currentLoadout } from "../current_loadout.js";

import { arcData as vanishedIslandArc } from "./arcs/vanished-island/index.js";

const arcRegistry = {
    [vanishedIslandArc.config.id]: vanishedIslandArc
};

export const availableArcs = Object.values(arcRegistry).map((arc) => ({
    id: arc.config.id,
    slug: arc.config.slug,
    label: arc.config.label ?? arc.config.name ?? arc.config.id,
    name: arc.config.name ?? arc.config.label ?? arc.config.id,
    status: arc.config.status ?? "available",
    summary: arc.config.summary ?? ""
}));

function normalizeArcId(arcId) {
    if (arcRegistry[arcId]) return arcId;

    const matchedArc = Object.values(arcRegistry).find((arc) => {
        return (
            arc.config.slug === arcId ||
            arc.config.name === arcId ||
            arc.config.label === arcId
        );
    });

    return matchedArc?.config.id ?? vanishedIslandArc.config.id;
}

function ids(items = []) {
    return items.map((item) => item.id).filter(Boolean);
}

function currentLoadoutMatchesArc(arc) {
    return (
        currentLoadout.campaignId === campaignPlaceholder.id &&
        (
            currentLoadout.arcId === arc.config.id ||
            currentLoadout.arcId === arc.config.slug
        )
    );
}

function buildInspectionLoadout(arc) {
    return {
        ...currentLoadout,
        campaignId: campaignPlaceholder.id,
        modeId: campaignPlaceholder.modeId,
        arcId: arc.config.id,

        activeActors: ids(arc.actors),
        activeLocations: ids(arc.locations),
        activeAmbientCast: ids(arc.ambientCast),
        activeFactions: ids(arc.factions),
        activeThreads: ids(arc.threads),
        activeTrackers: ids(arc.trackers),
        activeScenes: ids(arc.scenes),
        activeFireableMoments: ids(arc.fireableMoments),
        activeTables: ids(arc.tables),
        activeReferences: ids(arc.references)
    };
}

function getEffectiveLoadout(arc) {
    if (currentLoadoutMatchesArc(arc)) {
        return {
            activeAmbientCast: [],
            activeFireableMoments: [],
            ...currentLoadout,
            campaignId: campaignPlaceholder.id,
            modeId: campaignPlaceholder.modeId,
            arcId: arc.config.id
        };
    }

    return buildInspectionLoadout(arc);
}

export function getCampaignDataForArc(
    arcId = currentLoadout.arcId
) {
    const resolvedArcId = normalizeArcId(arcId);
    const arc = arcRegistry[resolvedArcId] ?? vanishedIslandArc;

    return {
        config: campaignPlaceholder,
        activeArc: arc.config,
        availableArcs,
        currentLoadout: getEffectiveLoadout(arc),

        actors: [...arc.actors],
        locations: [...arc.locations],
        ambientCast: [...arc.ambientCast],
        fireableMoments: [...arc.fireableMoments],
        factions: [...arc.factions],
        threads: [...arc.threads],
        trackers: [...arc.trackers],
        scenes: [...arc.scenes],
        tables: [...arc.tables],
        references: [...arc.references]
    };
}

export const campaignData = getCampaignDataForArc(currentLoadout.arcId);