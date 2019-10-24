export interface AuditShort {
    key: number;
    auditorName: string;
    assessedDate: string;
}
export interface CheckItem {
    questionID: number;
    checkItemID: number;
    checkItem: string;
    checkItemDescription: string;
    checkItemAnswer: string;
    auditPhase: string;
    status: string;
}
export interface AuditDetail {
    key: number;
    departmentName: string;
    companyName: string;
    auditorName: string;
    assessedDate: string;
    checkItems: CheckItem[];
}
