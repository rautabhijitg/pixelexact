import { Check, Clock } from "lucide-react";

/**
 * Native, fictional reconstructions of the redesigned interfaces. Built in
 * HTML/CSS (no raster screenshots) so no client branding or real data ever
 * ships. Each figure is exposed to assistive tech as one labelled image; the
 * inner markup is decorative.
 */

const statusTiles: [string, string][] = [
    ["128", "Pending fulfillment"],
    ["14", "Deficient"],
    ["32", "Pending payment"],
    ["7", "Cancelled"],
    ["96", "Finalizing records"],
    ["48", "Delivered"],
];

const recentRequests: [string, string, string][] = [
    ["#00000001", "04/08", "No payment"],
    ["#00000002", "04/06", "In progress"],
    ["#00000003", "04/02", "No payment"],
];

export function DashboardMock() {
    return (
        <figure className="portal-mock">
            <div className="portal-mock__frame" role="img" aria-label="Redesigned request dashboard showing a request status summary, an action-required count, a balance-due widget, and recently logged requests. Sample data only.">
                <div aria-hidden="true">
                    <div className="portal-mock__bar"><span>Request status summary</span><span className="portal-mock__pill portal-mock__pill--solid">+ Log a request</span></div>
                    <div className="portal-mock__tiles">
                        {statusTiles.map(([count, label]) => <div key={label}><strong>{count}</strong><span>{label}</span></div>)}
                    </div>
                    <div className="portal-mock__row">
                        <div className="portal-mock__card"><span>Action required</span><strong>04</strong><small>Items requiring attention</small></div>
                        <div className="portal-mock__card portal-mock__card--accent"><span>Balance due</span><strong>$114.94</strong><small>3 records require payment</small></div>
                    </div>
                    <table className="portal-mock__table">
                        <tbody>
                            {recentRequests.map(([id, date, status]) => <tr key={id}><td>{id}</td><td>{date}</td><td><span className="portal-mock__pill">{status}</span></td></tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <figcaption className="service-page__label service-page__art-caption">Reconstruction of the redesigned dashboard. Sample data, not the live product.</figcaption>
        </figure>
    );
}

const timeline: [string, string, "done" | "current" | "todo"][] = [
    ["Submitted", "Request received by the processing pipeline", "done"],
    ["In progress", "Pending fulfillment, then finalizing records", "current"],
    ["Complete", "Documents delivered to the requester", "todo"],
];

export function TrackerMock() {
    return (
        <figure className="portal-mock">
            <div className="portal-mock__frame" role="img" aria-label="Request status tracker showing a three-step timeline from submitted to in progress to complete, with an estimated completion date and an outstanding balance. Sample data only.">
                <div aria-hidden="true">
                    <div className="portal-mock__bar"><span>Request #00000001</span><span className="portal-mock__pill">Awaiting payment</span></div>
                    <p className="portal-mock__eta"><Clock size={14} /> Estimated completion: sample date</p>
                    <ol className="portal-mock__timeline">
                        {timeline.map(([title, detail, state]) => (
                            <li key={title} data-state={state}>
                                <span className="portal-mock__dot">{state === "done" && <Check size={12} />}</span>
                                <div><strong>{title}</strong><small>{detail}</small></div>
                            </li>
                        ))}
                    </ol>
                    <div className="portal-mock__card portal-mock__card--accent"><span>Balance due</span><strong>$125.50</strong><small>Itemized invoice available</small></div>
                </div>
            </div>
            <figcaption className="service-page__label service-page__art-caption">Reconstruction of the status timeline. Sample data, not the live product.</figcaption>
        </figure>
    );
}

const filters = ["Patient name", "Date of birth", "Reference ID", "Tracking code", "Request ID", "Status", "Date range"];

export function SearchMock() {
    return (
        <figure className="portal-mock">
            <div className="portal-mock__frame" role="img" aria-label="Find request screen with multi-field filters (patient name, date of birth, reference ID, tracking code, request ID, status, date range) and a bulk action bar for paying, downloading, or cancelling selected requests. Sample data only.">
                <div aria-hidden="true">
                    <div className="portal-mock__bar"><span>Find request</span></div>
                    <div className="portal-mock__filters">
                        {filters.map((label) => <span key={label}>{label}</span>)}
                    </div>
                    <div className="portal-mock__bulk"><span>2 selected</span><span className="portal-mock__pill portal-mock__pill--solid">Pay</span><span className="portal-mock__pill">Download invoices</span><span className="portal-mock__pill">Cancel</span></div>
                </div>
            </div>
            <figcaption className="service-page__label service-page__art-caption">Reconstruction of multi-field search with bulk actions. No real data.</figcaption>
        </figure>
    );
}
