export interface AuditShort {
    key: number;
    auditorName: string;
    assessedDate: string;
    averageScore: number;
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

export interface ChartData {
    key: number;
    name: string;
    value: number;
}
export interface phaseScore {
    auditPhase: string,
    score: number
}

export interface AuditStat {
    key: number,
    phaseScores: phaseScore[]
}
