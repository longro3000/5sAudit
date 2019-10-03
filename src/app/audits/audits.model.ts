export interface AuditShort {
    key: string;
    auditorName: string;
    assessedDate: string;        
}
export interface CheckItem {
    checkItemID: string;
    checkItem: string;
    checkItemDescription: string;
    checkItemAnswer: string;
    auditPhase: string;
    status: string;
}
export interface AuditDetail {
    key: string;
    departmentName: string;
    companyName: string;
    auditorName: string;
    assessedDate: string;
    additionalInfo: string;
    checkItems: CheckItem[];
}