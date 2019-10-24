export interface AuditQuestion {
    questionID: number;
    checkItem: number;
    checkItemDescription: string;
    auditPhase: string;
    status: string;
}

export interface AuditAnswer {
    questionID: number;
    checkItemAnswer: number;
}

export interface AuditForm {
    departmentName: string;
    companyName: string;
    auditorName: string;
    checkItemsSend: AuditAnswer[];
}
